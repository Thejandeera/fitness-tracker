import React from 'react';
import './features.css';

const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "Track Progress",
      description: "Monitor your fitness journey with detailed graphs and statistics"
    },
    {
      icon: "⏱️",
      title: "Workout Timer",
      description: "Keep track of your workout duration and sessions"
    },
    {
      icon: "⚖️",
      title: "Weight Logger",
      description: "Record and visualize your weight changes over time"
    },
    {
      icon: "🎯",
      title: "Goal Setting",
      description: "Set and track your fitness goals"
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Access your fitness data anywhere, anytime"
    },
    {
      icon: "📈",
      title: "Progress Reports",
      description: "Get detailed insights about your fitness journey"
    }
  ];

  return (
    <div className="features-container">
      <h1>Features</h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;