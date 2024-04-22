// SleepDataList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SleepDataList = () => {
  const [sleepData, setSleepData] = useState([]);

  useEffect(() => {
    fetchSleepData();
  }, []);

  const fetchSleepData = async () => {
    try {
      const response = await axios.get('/api/sleepdata');
      setSleepData(response.data);
    } catch (error) {
      console.error('Error fetching sleep data:', error);
    }
  };

  return (
    <div>
      <h2>Sleep Data List</h2>
      <ul>
        {sleepData.map(data => (
          <li key={data._id}>
            Date: {data.date}, Duration: {data.durationInHours} hours, Quality: {data.quality}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SleepDataList;
