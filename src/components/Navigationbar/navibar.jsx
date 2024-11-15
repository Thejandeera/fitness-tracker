import React from 'react';
import './navibar.css';

function NavigationBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Fitness Island <img src="/svg3.svg" alt="Logo" className="navbar-logo-svg" /></h1>
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/progress">Progress</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
