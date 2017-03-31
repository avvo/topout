const request = require('request');

module.exports.index = (req, res) => {
  request('http://topout-api.conductor.topout.jakotako.com:8890/api/leaderboard_summary', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const leaderboard = JSON.parse(body).data;
      const App = req.renderComponent('App', {leaderboard});
      res.render('app', {app: App})
    }
  });
}

module.exports.api = (req, res) => {
  request('http://topout-api.conductor.topout.jakotako.com:8890/api/leaderboard_summary', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const leaderboard = JSON.parse(body).data;
      res.json({leaderboard})
    }
  });
}
