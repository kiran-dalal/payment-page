import React, { useState } from 'react';

const SubscriptionPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <h3>Select your subscription plan:</h3>
      <ul>
        <li>
          <input
            type="radio"
            id="12 months subscription"
            name="subscriptionPlan"
            value="Plan 1"
            checked={selectedPlan === 'Plan 1'}
            onChange={() => handlePlanSelect('Plan 1')}
          />
          <label htmlFor="plan1">12 months subscription</label>
        </li>
        <li>
          <input
            type="radio"
            id="6 months subscription"
            name="subscriptionPlan"
            value="Plan 2"
            checked={selectedPlan === 'Plan 2'}
            onChange={() => handlePlanSelect('Plan 2')}
          />
          <label htmlFor="plan2">6 months subscription</label>
        </li>
        <li>
          <input
            type="radio"
            id="3 months subscription"
            name="subscriptionPlan"
            value="3 months subscription"
            checked={selectedPlan === '3 months subscription'}
            onChange={() => handlePlanSelect('3 months subscription')}
          />
          <label htmlFor="plan3">3 months subscription</label>
        </li>
      </ul>
    </div>
  );
};

export default SubscriptionPlan;
