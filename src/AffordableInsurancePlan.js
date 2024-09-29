import React from 'react';
import './affordableInsurancePlan.css';

const AffordableInsurancePlan = () => {
  const plans = [
    { name: 'Basic Plan', cost: '$200/month', coverage: 'Individual' },
    { name: 'Family Plan', cost: '$400/month', coverage: 'Family' },
    { name: 'Couple Plan', cost: '$300/month', coverage: 'Couple' },
  ];

  return (
    <div className="plan-page">
      <h1>Affordable Insurance Plans</h1>
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>
            <strong>{plan.name}</strong> - {plan.cost} - Coverage: {plan.coverage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AffordableInsurancePlan;
