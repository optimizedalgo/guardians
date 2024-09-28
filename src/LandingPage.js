import React, { useState } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [language, setLanguage] = useState('en');
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  
  const content = {
    en: {
      welcome: "Welcome to myguardians",
      login: "Login",
      signup: "Signup",
    },
    es: {
      welcome: "Bienvenido a myguardians",
      login: "Iniciar sesión",
      signup: "Regístrate",
    },
    hi: {
      welcome: "myguardians में आपका स्वागत है",
      login: "लॉगिन करें",
      signup: "साइन अप करें",
    },
    vi: {
      welcome: "Chào mừng bạn đến với myguardians",
      login: "Đăng nhập",
      signup: "Đăng ký",
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div className="landing-page">
      {/* Language Selection */}
      <header className="language-section text-center">
        <h2>{content[language].welcome}</h2>
        <select value={language} onChange={handleLanguageChange} className="language-select">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="hi">हिन्दी</option>
          <option value="vi">Tiếng Việt</option>
        </select>
      </header>

      {/* Login and Signup Section */}
      <div className="auth-buttons text-center">
        <button className="btn btn-primary m-2" onClick={handleLoginClick}>{content[language].login}</button>
        <button className="btn btn-secondary m-2" onClick={handleSignupClick}>{content[language].signup}</button>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>{content[language].login}</h3>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="btn">Login</button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>{content[language].signup}</h3>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="btn">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
