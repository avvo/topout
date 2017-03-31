const config = require('config');
const ReactHelper = require('react-helper');

module.exports.index = (req, res) => {
  user = req.session.passport.user;
  const App = ReactHelper.renderComponent('App', {user, socketUrl: config.fullUrl})
  res.render('app', {app: App})
}
