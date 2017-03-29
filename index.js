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

app.use(router);


const port    = config.port;
const host    = config.host;
app.listen(port, host, function () {
  console.log(`avvoflow-service [${process.env.NODE_ENV}] started on port ${port}`);
});
