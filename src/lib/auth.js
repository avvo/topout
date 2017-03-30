module.exports.isAuthenticated = (req, res, next) => {
  if (req.user)
    return next();

  res.redirect('/');
}
