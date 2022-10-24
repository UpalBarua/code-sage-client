import React from 'react';
import utilities from '../../assets/utilities.module.css';
import Navbar from '../Navbar/Navbar';

const App = () => {
  return (
    <div className={utilities.container}>
      <Navbar />
    </div>
  );
};

export default App;
