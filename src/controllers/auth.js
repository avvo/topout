
module.exports.logout = (req, res) => {
  req.logout();
  return res.redirect('/')
}

module.exports.login = (req, res) => {
  return res.redirect('/leaderboard')
}
