if (process.env.NODE_ENV == "development") {
  require('dotenv').config()
}

const express = require('express');
const exphbs  = require('express-handlebars');
const router = require('./config/routes').router;
const path = require('path');
const config  = require('config');
const app = express();
const bodyParser = require('body-parser');

app.set('views', 'src/views');
app.engine('handlebars', exphbs({layoutsDir: 'src/views/layouts',defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


var passport = require('passport');
require('./src/lib/githubPassportImpl').setup(passport);
app.use(require('cookie-parser')());
var session = require('express-session');
const RedisStore = require('connect-redis')(session);
app.use(session({
  store: new RedisStore({host: config.redis.host}),
  secret: config.session.secret,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

require('./config/db').initConnectection((err, db) => {
  if (err) {
    console.log(err);
    process.exit()
  }

  const port    = config.port;
  const host    = config.host;
  const server = app.listen(port, host, function (server) {
    console.log(`avvoflow-service [${process.env.NODE_ENV}] started on port ${port}`);
  });
  const socket = require('./config/socket').connect(server);
  require('./src/lib/dataPullerCron').schedule(db, socket);

});
