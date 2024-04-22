// Import mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/MedicalData", { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for sleep data
const sleepDataSchema = new mongoose.Schema({
    date: Date,
    durationInHours: Number,
    quality: String,
    // You can add more fields as needed
});

// Create a Mongoose model based on the schema
const SleepData = mongoose.model('SleepData', sleepDataSchema);

// Example sleep data
const sleepDataArray = [
    {
        date: new Date(),
        durationInHours: 7,
        quality: 'Good',
        // Add more data as needed
    },
    {
        date: new Date('2024-04-01T08:00:00'),
        durationInHours: 6,
        quality: 'Fair',
        // Add more data as needed
    },
    // Add more sleep data objects as needed
];

// Save sleep data to MongoDB
SleepData.insertMany(sleepDataArray)
    .then(savedData => {
        console.log('Sleep data saved successfully:', savedData);
    })
    .catch(error => {
        console.error('Error saving sleep data:', error);
    });
