import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './navibar.css';

function NavigationBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Fitness Island <img src="/svg3.svg" alt="Logo" className="navbar-logo-svg" /></h1>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li> {/* Replace href with Link */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/progress">Progress</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
