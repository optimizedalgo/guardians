import React from 'react';
import { useNavigate } from 'react-router-dom';
import './insured.css';
import LanguageSelector from './LanguageSelector'; // Import the LanguageSelector component

const Insured = ({ language, setLanguage }) => {
  const navigate = useNavigate();

  const content = {
    en: {
      question: "Do you have insurance?",
      yes: "Yes",
      no: "No",
    },
    es: {
      question: "¿Tienes seguro?",
      yes: "Sí",
      no: "No",
    },
    hi: {
      question: "क्या आपके पास बीमा है?",
      yes: "हां",
      no: "नहीं",
    },
    vi: {
      question: "Bạn có bảo hiểm không?",
      yes: "Có",
      no: "Không",
    },
  };

  return (
    <div className="insurance-question-page">
      <div className="question-container">
        <h1 className="question-title">{content[language].question}</h1>
        <div className="button-container">
          <button className="btn btn-primary" onClick={() => navigate('/next-page')}>{content[language].yes}</button>
          <button className="btn btn-secondary" onClick={() => navigate('/next-page')}>{content[language].no}</button>
        </div>
      </div>
      <LanguageSelector language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default Insured;
