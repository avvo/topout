const ReactHelper = require('react-helper');
module.exports = () => {
  return (req, res, next) => {
    req.reactContext = {};
    req.renderComponent = (componentName, props={}) => {
      const fullProps = Object.assign({}, req.reactContext, props)
      return ReactHelper.renderComponent(componentName, fullProps);
    }
    next();
  }

}
