import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AssessmentPage from '../pages/AssessmentPage';
import HowItWorks from '../pages/HowItWorks'; // Import the new page

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} /> {/* Add this */}
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/feedback" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
