import React from 'react';
import './recommendedHealthcareProvider.css';

const RecommendedHealthcareProvider = () => {
  const providers = [
    { name: 'CardioCare', specialty: 'Cardiology', area: '10001' },
    { name: 'SkinWell', specialty: 'Dermatology', area: '10002' },
    { name: 'PediHealth', specialty: 'Pediatrics', area: '10003' },
  ];

  return (
    <div className="provider-page">
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
