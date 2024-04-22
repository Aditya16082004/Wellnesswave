const express = require('express');
const router = express.Router();
const SleepData = require('../models/SleepData');

// Route to save sleep data
router.post('/', async (req, res) => {
    try {
        const newSleepData = new SleepData(req.body);
        const savedData = await newSleepData.save();
        res.json(savedData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
