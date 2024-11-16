import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import BrowserRouter, Routes, and Route
import Data from './components/Data/data.jsx';
import NavigationBar from './components/Navigationbar/navibar.jsx';
import Home from './components/Home/home.jsx';  
import About from './components/About/about.jsx';
import Contact from './components/Contact/contact.jsx';
import Features from './components/Features/features.jsx';
import Signup from './components/Signup/signup.jsx';
import Login from './components/Login/login.jsx';

const App = () => {
  return (
    <BrowserRouter> {/* Wrap everything with BrowserRouter for routing */}
      <div>
        <section id="NavigationBar">
          <NavigationBar />
        </section>
        <section id="Data">
          <Routes> {/* Define routes inside Routes component */}
            <Route path="/login" element={<Login />} /> 
            <Route path="/" element={<Signup />} /> 
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/progress" element={<Data />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
