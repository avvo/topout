
module.exports.index = (req, res) => {
  const db = require('../../config/db').db;
  db.collection('scores').find({user: req.user.id}).limit( 150 ).sort({timestamp: -1}).toArray((err, scores) => {
    const App = req.renderComponent('App', {scores: scores.reverse()})
    res.render('app', {app: App})
  })
}

module.exports.api = (req, res) => {
  const db = require('../../config/db').db;
  db.collection('scores').find({user: req.user.id}).limit( 150 ).sort({timestamp: -1}).toArray((err, scores) => {
    res.json({scores: scores.reverse()})
  })
}


module.exports.player = (req, res) => {
  const db = require('../../config/db').db;
  db.collection('scores').find({user: req.params.userId}).limit( 150 ).sort({timestamp: -1}).toArray((err, scores) => {
    const App = req.renderComponent('App', {scores: scores.reverse()})
    res.render('app', {app: App})
  })
}

module.exports.playerApi = (req, res) => {
  const db = require('../../config/db').db;
  db.collection('scores').find({user: req.params.userId}).limit( 150 ).sort({timestamp: -1}).toArray((err, scores) => {
    res.json({scores: scores.reverse()})
  })
}
