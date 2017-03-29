const GitHubStrategy = require('passport-github').Strategy;
const config  = require('config');

module.exports.setup = (passport) => {

  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

  passport.use(new GitHubStrategy({
      clientID: config.github.clientId,
      clientSecret: config.github.secret,
      callbackURL: config.github.callback
    },
    function(accessToken, refreshToken, profile, cb) {
      return cb(null, {id: profile.id, userName: profile.username});
    }
  ));
}
