const config = require('config');

module.exports = () => {
  return (req, res, next) => {
    req.reactContext.user = {}
    if (req.user) {
      req.reactContext.user = req.user;
    }
    req.reactContext.socketUrl = config.fullUrl;
    next();
  }
}
