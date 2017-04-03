const schedule = require('node-schedule');
const request = require('request');
const ObjectId = require('mongodb').ObjectID;
const config = require('config');

module.exports.schedule = (db, socket) => {
  schedule.scheduleJob('* */6 * * *', () => {
    request(`${config.topoutApi.baseUrl}/api/leaderboard_summary`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const leaderboard = JSON.parse(body).data;
        socket.emit('db', {leaderboard: leaderboard});
        const scores = leaderboard.map(record => {
          return {id: new ObjectId(), timestamp: Date.now(), score: record.score, user: record.id}
        })
        if (scores.length > []) {
          db.collection('scores').insertMany(scores, function(err, res) {})
        }
      };
    });
  });
  console.log('Data puller cron started');
}
