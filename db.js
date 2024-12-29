const mongoose = require('mongoose');
// const mongoUrl = 'mongodb://localhost:27017/hotels';//mongodb connec. URL
const mongoUrl = 'mongodb+srv://saad0203md:6AXhqR5iIS69RQwz@cluster0.co8ju.mongodb.net/hotel?retryWrites=true&w=majority&appName=Cluster0';
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

