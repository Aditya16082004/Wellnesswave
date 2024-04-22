import React from 'react';
import SleepDataForm from './components/SleepDataForm';
import SleepDataList from './components/SleepDataList';

const App = () => {
  return (
    <div>
      <h1>Sleep Tracker App</h1>
      <SleepDataForm />
      <SleepDataList />
    </div>
  );
};

export default App;
