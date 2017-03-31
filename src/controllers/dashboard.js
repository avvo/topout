
module.exports.index = (req, res) => {
  const db = require('../../config/db').db;
  db.collection('scores').find({user: req.user.id}).toArray((err, scores) => {
    const App = req.renderComponent('App', {scores})
    res.render('app', {app: App})
  })
}
