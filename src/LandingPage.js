import React, { useState } from 'react';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import LanguageSelector from './LanguageSelector';
import icon from './icon.webp';

function LandingPage({ language, setLanguage }) {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const content = {
    en: {
      welcome: "Welcome to Guardians",
      login: "Login",
      signup: "Signup",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Password",
      namePlaceholder: "Name",
    },
    es: {
      welcome: "Bienvenido a Guardians",
      login: "Iniciar sesión",
      signup: "Regístrate",
      emailPlaceholder: "Correo electrónico",
      passwordPlaceholder: "Contraseña",
      namePlaceholder: "Nombre",
    },
    hi: {
      welcome: "Guardians में आपका स्वागत है",
      login: "लॉगिन करें",
      signup: "साइन अप करें",
      emailPlaceholder: "ईमेल",
      passwordPlaceholder: "पासवर्ड",
      namePlaceholder: "नाम",
    },
    vi: {
      welcome: "Chào mừng bạn đến với Guardians",
      login: "Đăng nhập",
      signup: "Đăng ký",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Mật khẩu",
      namePlaceholder: "Tên",
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setShowSignup(false);
    setError('');
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully');
      navigate('/insured');
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const userDocRef = doc(db, 'users', email);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        setError('User already exists. Please login.');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(userDocRef, {
        name: name,
        email: email,
        createdAt: new Date().toISOString(),
      });

      console.log('Signed up successfully');
      handleCloseModal();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-page">
      <header className="language-section">
      <link rel="icon" href="icon.webp" />
        <img src={icon} alt="Guardians Icon" className="website-icon" /> {/* Add the icon here */}
        
        <h2>{content[language].welcome}</h2>
        <div className="auth-buttons">
          <button className="btn btn-primary" onClick={() => setShowLogin(true)}>{content[language].login}</button>
          <button className="btn btn-secondary" onClick={() => setShowSignup(true)}>{content[language].signup}</button>
        </div>
      </header>

      <LanguageSelector language={language} setLanguage={setLanguage} />

      {(showLogin || showSignup) && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>{showLogin ? content[language].login : content[language].signup}</h3>
            {error && <p className="error">{error}</p>}
            <form onSubmit={showLogin ? handleLogin : handleSignup}>
              {showSignup && (
                <input 
                  type="text" 
                  placeholder={content[language].namePlaceholder} 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input 
                type="email" 
                placeholder={content[language].emailPlaceholder} 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input 
                type="password" 
                placeholder={content[language].passwordPlaceholder} 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Loading...' : (showLogin ? content[language].login : content[language].signup)}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;