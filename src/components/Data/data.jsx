import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './data.css';
import { Toaster, toast } from 'react-hot-toast';
function FitTrack() {
  // State to store weight and workout data
  const [weightData, setWeightData] = useState([]);
  const [workoutData, setWorkoutData] = useState([]);

  // State to hold the user input
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [name, setName] = useState(''); // State to store user name

  // Handler for adding new data to the chart and sending it to Google Sheets
  const handleAddData = () => {
    // Directly call toast.success without a separate function
    toast.success('Graph Generated ..!!', {
      duration: 2000,  // Set duration to 2000ms (2 seconds)
    });
  
    // Update weight data
    setWeightData(prevData => [
      ...prevData,
      { date, weight: parseFloat(weight) }
    ]);
  
    // Update workout duration data
    setWorkoutData(prevData => [
      ...prevData,
      { date, duration: parseFloat(duration) }
    ]);
  
    // Send data to Google Sheets using POST request
    sendToGoogleSheets(name, date, weight, duration);
  
    // Clear input fields after adding data, except the name field
    setDate('');
    setWeight('');
    setDuration('');
  };
  

  // Function to send data to Google Sheets using the Google Apps Script URL
  const sendToGoogleSheets = async (name, date, weight, duration) => {
    const formData = new FormData();
    formData.append('name', name);  // Append the name
    formData.append('date', date);
    formData.append('weight', weight);
    formData.append('duration', duration);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxqCADNO646IIWX08K_y5mPbDX1KWsMRilEuEOng3r0hdlkZ6lRYnWGU9TzsCrnafzgaQ/exec', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        console.log('Data sent to Google Sheets successfully');
      } else {
        console.error('Failed to send data to Google Sheets');
      }
    } catch (error) {
      console.error('Error sending data to Google Sheets:', error);
    }
  };

  return (
    <div className="fittrack-container">
      <h1 className="fittrack-title">Welcome to Fitness Island</h1>
      
      {/* User Input Section */}
      <div className="fittrack-input-section">
        <h2>Enter Your Data</h2>
        
        {/* Name Input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          className="fittrack-input"
        />
        
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          className="fittrack-input"
        />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight (kg)"
          className="fittrack-input"
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Workout Duration (minutes)"
          className="fittrack-input"
        />
        <button onClick={handleAddData} className="fittrack-button">
          Generate Graph
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      <div className="fittrack-grid">
        {/* Weight Progress Chart */}
        <div className="fittrack-card">
          <h2 className="fittrack-card-title">Weight Progress</h2>
          <p className="fittrack-card-description">Your weight over time (kg)</p>
          <div className="fittrack-chart">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="#8884d8" dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Workout Duration Chart */}
        <div className="fittrack-card">
          <h2 className="fittrack-card-title">Workout Duration</h2>
          <p className="fittrack-card-description">Your workout duration over time (minutes)</p>
          <div className="fittrack-chart">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={workoutData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="duration" stroke="#82ca9d" dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="fittrack-card fittrack-achievements">
        <h2 className="fittrack-card-title">Recent Achievements</h2>
        <ul className="fittrack-achievements-list">
          <li>Completed 30-day workout challenge</li>
          <li>Reached weight goal of 75kg</li>
          <li>Ran first 5K race</li>
          <li>Improved bench press max to 80kg</li>
        </ul>
      </div>
    </div>
  );
}

export default FitTrack;
