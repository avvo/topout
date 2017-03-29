const ReactHelper = require('react-helper');

module.exports.index = (req, res) => {
  let user = {}
  if (req.session.passport && req.session.passport.user) {
    user = req.session.passport.user;
  }
  const App = ReactHelper.renderComponent('App', {user})
  res.render('app', {app: App})
}
