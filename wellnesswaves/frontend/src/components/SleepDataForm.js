// SleepDataForm.js

import React, { useState } from 'react';
import axios from 'axios';

const SleepDataForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    durationInHours: '',
    quality: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/sleepdata', formData);
      console.log('Sleep data saved:', response.data);
      // Reset form after successful submission
      setFormData({
        date: '',
        durationInHours: '',
        quality: ''
      });
    } catch (error) {
      console.error('Error saving sleep data:', error);
    }
  };

  return (
    <div>
      <h2>Sleep Data Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div>
          <label>Duration (in hours):</label>
          <input type="number" name="durationInHours" value={formData.durationInHours} onChange={handleChange} />
        </div>
        <div>
          <label>Quality:</label>
          <input type="text" name="quality" value={formData.quality} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SleepDataForm;
