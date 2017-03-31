const ReactHelper = require('react-helper');
const config = require('config');
const request = require('request');

module.exports.index = (req, res) => {
  request('http://topout-api.conductor.topout.jakotako.com:8890/api/leaderboard_summary', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const leaderboard = JSON.parse(body).data;
      const user = req.session.passport.user;
      const App = ReactHelper.renderComponent('App', {leaderboard, user, socketUrl: config.fullUrl});
      res.render('app', {app: App})
    }
  });
}
