import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import styles from './signup.module.css'; // Import the CSS module
import { Toaster, toast } from 'react-hot-toast';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();  // Initialize navigate function
  const notify = () => toast.success('Signup successful!', {
    duration: 2000,  // Set duration to 3000ms (3 seconds)
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fullName,
      username,
      password,
      email,
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbztxmsruhvl-eu9R2Dx9XHvTO2xmuBR56pTk27TxOqjSdgW41MSsqmH_RNracEsmFvF4Q/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data),
      });

      if (response.ok) {
        // alert('Account created successfully!');
        // Redirect to login page after successful signup
        navigate('/login');
      } else {
        alert('Error: Could not create account.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>
        <h1>Create Your Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onClick={notify} >Sign Up</button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Signup;
