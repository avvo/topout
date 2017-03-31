const schedule = require('node-schedule');
const request = require('request');

module.exports.schedule = (db, socket) => {
  schedule.scheduleJob('*/10 * * * * *', () => {
    request('http://topout-api.conductor.topout.jakotako.com:8890/api/leaderboard_summary', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const leaderboard = JSON.parse(body).data;
        socket.emit('db', {leaderboard: leaderboard});
      };
    });
  });
  console.log('Data puller cron started');
}
