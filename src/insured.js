import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './insured.css';
import LanguageSelector from './LanguageSelector';
import icon from './icon.webp';
const Insured = ({ language, setLanguage }) => {
  const navigate = useNavigate();

  const [isYesSelected, setIsYesSelected] = useState(null);
  const [provider, setProvider] = useState('');
  const [plan, setPlan] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [speciality, setSpeciality] = useState('');
  
  // New state for "No" option
  const [age, setAge] = useState('');
  const [affordablePay, setAffordablePay] = useState('');
  const [personsCovered, setPersonsCovered] = useState('');
  const providers = [

  ];
  
  const content = {
    en: {
      question: "Do you have insurance?",
      yes: "Yes",
      no: "No",
      provider: "Select Provider",
      plans: "Select Plan",
      areaCode: "Enter Area Code",
      speciality: "Select Health Care Provider Speciality",
      age: "Enter your age",
      affordablePay: "How much can you afford to pay?",
      personsCovered: "Plan Name",
      personsCoveredOptions: {
        childHealthPlus: "Child Health Plus",
        essentialPlan: "Essential Plan",
        individualQualified: "Individual Marketplace - Qualified Health Plans",
        individualDental: "Individual Marketplace - Stand Alone Dental Plans",
        medicaid: "Medicaid",
        smallBusinessDental: "Small Business Marketplace - Dental Plans",
        smallBusinessQualified: "Small Business Marketplace - Qualified Health Plans",
      }
    },
    es: {
      question: "¿Tienes seguro?",
      yes: "Sí",
      no: "No",
      provider: "Seleccionar Proveedor",
      plans: "Seleccionar Plan",
      areaCode: "Ingresar Código de Área",
      speciality: "Seleccionar Especialidad del Proveedor de Salud",
      age: "Ingresar tu edad",
      affordablePay: "¿Cuánto puedes permitirte pagar?",
      personsCovered: "Seleccione el Nombre del Plan",
      personsCoveredOptions: {
        childHealthPlus: "Child Health Plus",
        essentialPlan: "Plan Esencial",
        individualQualified: "Mercado Individual - Planes de Salud Calificados",
        individualDental: "Mercado Individual - Planes Dentales Independientes",
        medicaid: "Medicaid",
        smallBusinessDental: "Mercado de Pequeñas Empresas - Planes Dentales",
        smallBusinessQualified: "Mercado de Pequeñas Empresas - Planes de Salud Calificados",
    
      }
    },
    hi: {
      question: "क्या आपके पास बीमा है?",
      yes: "हां",
      no: "नहीं",
      provider: "प्रदाता चुनें",
      plans: "योजना चुनें",
      areaCode: "क्षेत्र कोड दर्ज करें",
      speciality: "स्वास्थ्य सेवा प्रदाता की विशेषज्ञता चुनें",
      age: "अपनी उम्र दर्ज करें",
      affordablePay: "आप कितना भुगतान कर सकते हैं?",
      personsCovered: "योजना का नाम चुनें",
      personsCoveredOptions: {
        childHealthPlus: "चाइल्ड हेल्थ प्लस",
      essentialPlan: "अति आवश्यक योजना",
      individualQualified: "व्यक्तिगत मार्केटप्लेस - योग्य स्वास्थ्य योजनाएं",
      individualDental: "व्यक्तिगत मार्केटप्लेस - स्टैंडअलोन डेंटल प्लान्स",
      medicaid: "मेडिकेड",
      smallBusinessDental: "छोटे व्यवसाय मार्केटप्लेस - डेंटल प्लान्स",
      smallBusinessQualified: "छोटे व्यवसाय मार्केटप्लेस - योग्य स्वास्थ्य योजनाएं",
      }
    },
    vi: {
      question: "Bạn có bảo hiểm không?",
      yes: "Có",
      no: "Không",
      provider: "Chọn Nhà Cung Cấp",
      plans: "Chọn Kế Hoạch",
      areaCode: "Nhập Mã Vùng",
      speciality: "Chọn Chuyên Khoa của Nhà Cung Cấp Dịch Vụ Y Tế",
      age: "Nhập tuổi của bạn",
      affordablePay: "Bạn có thể trả bao nhiêu?",
      personsCovered: "Chọn Tên Kế Hoạch",
      personsCoveredOptions: {
        childHealthPlus: "Child Health Plus",
        essentialPlan: "Kế Hoạch Cần Thiết",
        individualQualified: "Thị Trường Cá Nhân - Kế Hoạch Sức Khỏe Đủ Điều Kiện",
        individualDental: "Thị Trường Cá Nhân - Kế Hoạch Nha Khoa Độc Lập",
        medicaid: "Medicaid",
        smallBusinessDental: "Thị Trường Doanh Nghiệp Nhỏ - Kế Hoạch Nha Khoa",
        smallBusinessQualified: "Thị Trường Doanh Nghiệp Nhỏ - Kế Hoạch Sức Khỏe Đủ Điều Kiện",
      }
    }
  };  

  const handleAnswer = (answer) => {
    setIsYesSelected(answer === 'Yes');
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '2px solid #61dafb',
    backgroundColor: '#282c34',
    color: '#a0a0a0',
  };

  const selectStyle = {
    ...inputStyle,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2361dafb' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.75rem center',
    backgroundSize: '12px',
    paddingRight: '2.5rem',
  };

  const handleNumberInput = (setter) => (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) > 0 && !value.includes('.'))) {
      setter(value);
    }
  };

  // Submit handler for the forms
  const handleSubmit = () => {
    if (isYesSelected) {
      navigate('/recommended-healthcare-provider');  // Navigate to "Recommended Healthcare Provider" page
    } else if (isYesSelected === false) {
      navigate('/affordable-insurance-plan', { state: { selectedPlan: personsCovered } });  // Navigate to "Affordable Insurance Plan" page with selected plan
    }
  };
  

  return (
    <div className="insurance-question-page">  
      <div className="question-container">
      <link rel="icon" href="icon.webp" />
      <img src={icon} alt="Guardians Icon" className="website-icon" /> {/* Add the icon here */}
      
        <h1 className="question-title">{content[language].question}</h1>
        <div className="button-container">
          <button
            className={`btn ${isYesSelected === true ? 'selected' : ''}`}
            onClick={() => handleAnswer('Yes')}
          >
            {content[language].yes}
          </button>
          <button
            className={`btn ${isYesSelected === false ? 'selected' : ''}`}
            onClick={() => handleAnswer('No')}
          >
            {content[language].no}
          </button>
        </div>

        {isYesSelected === true && (
          <div className="boxes-container">
            {/* Insurance form for Yes */}
            <div className="input-group">
              <label>{content[language].provider}</label>
              <select
                style={selectStyle}
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
              >
                <option value="">{content[language].provider}</option>
                <option value="UniveraHealthcare">Univera Healthcare</option>
  <option value="FidelisCare">Fidelis Care</option>
  <option value="HighmarkBCBS">Highmark BCBS</option>
  <option value="IndependentHealth">Independent Health</option>
  <option value="UnitedHealthcare">United Healthcare</option>
  <option value="MolinaHealthcare">Molina Healthcare</option>
  <option value="IndependentHealthChildHealthPlus">Independent Health (Child Health Plus)</option>
  <option value="MVPHealthServices">MVP Health Services Corp</option>
  <option value="SolsticeHealthInsurance">Solstice Health Insurance Company</option>
  <option value="Guardian">Guardian</option>
  <option value="DeltaDental">Delta Dental of New York, Inc</option>

              </select>
            </div>

            <div className="input-group">
              <label>{content[language].plans}</label>
              <select
                style={selectStyle}
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                disabled={!provider}
              >
                <option value="">{content[language].plans}</option>
    <option value="ChildHealthPlus">Child Health Plus</option>
    <option value="EssentialPlan">Essential Plan</option>
    <option value="IndividualMarketplaceQualifiedHealthPlans">Individual Marketplace - Qualified Health Plans</option>
    <option value="IndividualMarketplaceStandAloneDentalPlans">Individual Marketplace - Stand Alone Dental Plans</option>
    <option value="Medicaid">Medicaid</option>
    <option value="SmallBusinessMarketplaceDentalPlans">Small Business Marketplace - Dental Plans</option>
    <option value="SmallBusinessMarketplaceQualifiedHealthPlans">Small Business Marketplace - Qualified Health Plans</option>

              </select>
            </div>

            <div className="input-group">
              <label>{content[language].areaCode}</label>
              <input
                type="text"
                style={inputStyle}
                placeholder={content[language].areaCode}
                value={areaCode}
                onChange={(e) => setAreaCode(e.target.value)}
                disabled={!plan}
              />
            </div>

            <div className="input-group">
              <label>{content[language].speciality}</label>
              <select
                style={selectStyle}
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                disabled={!areaCode}
              >
                <option value="">{content[language].speciality}</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Pediatrics">Pediatrics</option>
              </select>
            </div>

            <button className="btn submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}

        {isYesSelected === false && (
          <div className="boxes-container">
            {/* Insurance form for No */}
            <div className="input-group">
              <label>{content[language].age}</label>
              <input
                type="number"
                style={inputStyle}
                value={age}
                onChange={handleNumberInput(setAge)}
                placeholder={content[language].age}
                min="1"
              />
            </div>

            <div className="input-group">
              <label>{content[language].affordablePay}</label>
              <input
                type="number"
                style={inputStyle}
                value={affordablePay}
                onChange={handleNumberInput(setAffordablePay)}
                placeholder={content[language].affordablePay}
                min="0"
              />
            </div>

            <div className="input-group">
              <label>{content[language].areaCode}</label>
              <input
                type="text"
                style={inputStyle}
                value={areaCode}
                onChange={(e) => setAreaCode(e.target.value)}
                placeholder={content[language].areaCode}
              />
            </div>

            <div className="input-group">
              <label>{content[language].personsCovered}</label>
              <select
                style={selectStyle}
                value={personsCovered}
                onChange={(e) => setPersonsCovered(e.target.value)}
              >
                <option value="">{content[language].personsCovered}</option>
                {Object.entries(content[language].personsCoveredOptions).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>

            <button className="btn submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>

      <LanguageSelector language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default Insured;