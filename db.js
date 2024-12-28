const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/hotels';//mongodb connec. URL
//set up mongoDB connection
mongoose.connect(mongoUrl,{
  
});

const db = mongoose.connection;

//event listener for database connection
db.on('connected', () => {
  console.log('Connected to mongoDb server');
});

db.on('error', (err) => {
  console.error('MongoDb connection error :',err);
});

db.on('disconnected', () => {
  console.error('MongoDb server disconnected');
});

module.exports = db;

