import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import styles from './login.module.css'; // Import the CSS module

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = new URL('https://script.google.com/macros/s/AKfycbztxmsruhvl-eu9R2Dx9XHvTO2xmuBR56pTk27TxOqjSdgW41MSsqmH_RNracEsmFvF4Q/exec');
      const params = new URLSearchParams({
        username: username,
        password: password,
      });

      // Append the query parameters to the URL
      url.search = params.toString();

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (result.result === 'success') {
        // If login is successful, navigate to the home page
        navigate('/home');
      } else {
        // If the credentials are incorrect, show an alert
        alert(result.message || 'Invalid username or password');
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Login successful !..');
      navigate('/home');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1>Login to Fitness Island</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
