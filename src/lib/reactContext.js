const config = require('config');

module.exports = () => {
  return (req, res, next) => {
    if (req.user) {
      req.reactContext.user = req.user;
    }
    req.reactContext.socketUrl = config.fullUrl;
    next();
  }
}
