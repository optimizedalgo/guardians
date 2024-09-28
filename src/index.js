import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage';
import Insured from './insured';

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage language={language} setLanguage={setLanguage} />} />
        <Route path="/insured" element={<Insured language={language} setLanguage={setLanguage} />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
