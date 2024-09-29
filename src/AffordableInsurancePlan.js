import React from 'react';
import './affordableInsurancePlan.css';
import { useLocation } from 'react-router-dom';
import icon from './icon.webp';
const AffordableInsurancePlan = ({ selectedPlan }) => {
  const dataset = [
    { planName: 'essentialPlan', provider: 'Univera Healthcare', county: 'Erie', year: 2024 },
    { planName: 'essentialPlan', provider: 'Fidelis Care', county: 'Erie', year: 2024 },
    { planName: 'essentialPlan', provider: 'Highmark BCBS', county: 'Erie', year: 2024 },
    { planName: 'essentialPlan', provider: 'Independent Health', county: 'Erie', year: 2024 },
    { planName: 'essentialPlan', provider: 'United Healthcare', county: 'Erie', year: 2024 },
    { planName: 'childHealthPlus', provider: 'Independent Health', county: 'Erie', year: 2024 },
    { planName: 'childHealthPlus', provider: 'Highmark BCBS', county: 'Erie', year: 2024 },
    { planName: 'medicaid', provider: 'Fidelis Care', county: 'Erie', year: 2024 },
    { planName: 'medicaid', provider: 'Univera Healthcare', county: 'Erie', year: 2024 },
    { planName: 'smallBusinessQualified', provider: 'MVP Health Services Corp', county: 'Erie', year: 2024 },
    { planName: 'smallBusinessDental', provider: 'Guardian', county: 'Erie', year: 2024 },
    // Add more entries as needed
  ];
  const location = useLocation();
  selectedPlan = location.state?.selectedPlan || 'essentialPlan';  // Default to 'Essential Plan' if not passed
  console.log(selectedPlan)
  // Filter dataset by selected plan
  const filteredPlans = dataset.filter(plan => plan.planName === selectedPlan);

  // Randomly select two entries from the filtered plans
  const randomPlans = filteredPlans.sort(() => 0.5 - Math.random()).slice(0, 2);

  return (
    <div className="plan-page">
        <link rel="icon" href="icon.webp" />
        <img src={icon} alt="Guardians Icon" className="website-icon" /> {/* Add the icon here */}
      
      <h1>Affordable Insurance Plans</h1>
      <ul>
        {randomPlans.map((plan, index) => (
          <li key={index}>
            <strong>{plan.planName}</strong> - Provider: {plan.provider}, County: {plan.county}, Year: {plan.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AffordableInsurancePlan;
