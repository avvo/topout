const config = require('config').database;
const MongoClient = require('mongodb').MongoClient;

module.exports.initConnectection = (callback) => {
  const url = `mongodb://${config.host}:${config.port}/${config.database}`;
  MongoClient.connect(url, function(err, db) {
    if (err) {return callback(err)}
    console.log("Connected to mongo");
    module.exports.db = db;
    return callback(null, db)
  });
};
