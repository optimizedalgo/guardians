import React from 'react';

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div className="language-selector">
      <select value={language} onChange={(e) => setLanguage(e.target.value)} className="language-select">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="hi">हिन्दी</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
