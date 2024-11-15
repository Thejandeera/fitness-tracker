import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-text">WELCOME TO FITTRACK</h1>
      <div className="data-form">
        <h2>Enter Your Data</h2>
        <input type="text" placeholder="Enter Your Name" className="input-field" />
        <input type="date" className="input-field" />
        <input type="number" placeholder="Weight (kg)" className="input-field" />
        <input 
          type="number" 
          placeholder="Workout Duration (minutes)" 
          className="input-field"
        />
        <button className="generate-btn">Generate Graph</button>
      </div>
    </div>
  );
};

export default Home;