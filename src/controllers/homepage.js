const ReactHelper = require('react-helper');

module.exports.index = (req, res) => {
  const App = ReactHelper.renderComponent('App', {})
  console.log(App)
  res.render('app', {app: App})
}
