module.exports.index = (req, res) => {
  const App = req.renderComponent('App')
  res.render('app', {app: App})
}
