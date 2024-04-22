// models/SleepData.js

const mongoose = require('mongoose');

const sleepDataSchema = new mongoose.Schema({
  date: Date,
  durationInHours: Number,
  quality: String,
  // Add more fields as needed
});

module.exports = mongoose.model('SleepData', sleepDataSchema);
