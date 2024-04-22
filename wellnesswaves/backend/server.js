const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sleepDataRoutes = require('./routes/sleepDataRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/sleepdata', sleepDataRoutes);

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/MedicalData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
