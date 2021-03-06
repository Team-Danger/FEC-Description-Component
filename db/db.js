const Console = require('console');
const mongoose = require('mongoose');

const mongoUri = 'mongodb://mongo/airbnbdesc';
console.log('here-----', mongoUri);

const db = mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const { connection } = mongoose;
connection.on('error', Console.error.bind(console, 'connection error:'));
connection.once('open', () => Console.log('connected to mongodb'));

module.exports.connection = connection;
module.exports.db = db;
