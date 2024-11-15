import React from 'react';
import { Activity, BarChart2, Target, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './home.css';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click and navigate to the features page
  const handleButtonClick = () => {
    navigate('/features');
  };

  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Fitness Journey</h1>
          <p>Track, analyze, and achieve your fitness goals with precision</p>
          <button className="primary-button" onClick={handleButtonClick}>Get Started Free</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-content">
          <h2>Why Choose Fitness Island?</h2>
          <div className="features-grid">
            <FeatureCard 
              icon={<Activity className="feature-icon" />}
              title="Workout Tracking"
              description="Log your exercises, sets, and reps with ease"
            />
            <FeatureCard 
              icon={<BarChart2 className="feature-icon" />}
              title="Progress Visualization"
              description="See your improvements with detailed charts and graphs"
            />
            <FeatureCard 
              icon={<Target className="feature-icon" />}
              title="Custom Goals"
              description="Set and track personalized fitness objectives"
            />
            <FeatureCard 
              icon={<Trophy className="feature-icon" />}
              title="Achievement System"
              description="Stay motivated with rewards and milestones"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Fitness Journey?</h2>
          <p>Join thousands of users who have transformed their lives with Fitness Island</p>
          <button className="primary-button">Sign Up Now</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>Fitness Island</h3>
              <p>Your personal fitness companion</p>
            </div>
            <div className="footer-column">
              <h3>Features</h3>
              <ul>
                <li>Workout Tracking</li>
                <li>Progress Analysis</li>
                <li>Custom Goals</li>
                <li>Community Support</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Connect</h3>
              <ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon-container">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default HomePage;
