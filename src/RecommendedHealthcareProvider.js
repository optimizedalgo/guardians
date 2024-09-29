import React from 'react';
import './recommendedHealthcareProvider.css';
import icon from './icon.webp';
const RecommendedHealthcareProvider = () => {
    

  const providers = [

    { name: 'Delta Dental of New York, Inc', specialty: 'Dental', area: 'Erie (Individual Marketplace - Stand Alone Dental Plans)' },
  ];

  return (
    <div className="provider-page">
        <link rel="icon" href="icon.webp" />
         <img src={icon} alt="Guardians Icon" className="website-icon" /> {/* Add the icon here */}
      
      <h1>Recommended Healthcare Providers</h1>
      <ul>
        {providers.map((provider, index) => (
          <li key={index}>
            <strong>{provider.name}</strong> - {provider.specialty} - Area: {provider.area}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedHealthcareProvider;
