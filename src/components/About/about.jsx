import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About FitTrack</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>We help you track your fitness journey with precision and motivation. Whether you're just starting or an experienced athlete, FitTrack is here to help you reach your goals.</p>
        </div>
        <div className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Personal workout tracking</li>
            <li>Progress visualization</li>
            <li>Custom fitness goals</li>
            <li>Data-driven insights</li>
            <li>Weekly and monthly progress reports</li>
            <li>Workout suggestions based on your progress</li>
            <li>Exercise library with tutorials</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Why Choose Us</h2>
          <p>FitTrack provides a simple yet powerful way to monitor your fitness progress. Our platform is designed to help you achieve your health goals through data-driven insights and personalized tracking. Whether your goal is weight loss, muscle gain, or endurance improvement, FitTrack provides a tailored experience for you.</p>
        </div>
        <div className="about-section">
          <h2>Our Approach</h2>
          <p>At FitTrack, we prioritize your fitness journey with a holistic approach. We integrate personalized coaching, scientific tracking methods, and motivational tools to help you stay on track and see real results.</p>
        </div>
        <div className="about-section">
          <h2>Our Team</h2>
          <p>Our team is passionate about fitness and technology. We are a group of health enthusiasts, developers, and fitness experts working together to bring you the best fitness tracking experience. Together, we strive to innovate and offer the best possible service for your health and fitness goals.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
