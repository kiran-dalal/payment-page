import React from 'react';
import SignUpForm from './Components/SignUpForm';
import SubscriptionPlan from './Components/SubscriptionPlan';
import PaymentSummary from './Components/PaymentSummary';

const App = () => {
  return (
    <div>
      <h1>Sign Up and Subscription</h1>
      <SignUpForm />
      <SubscriptionPlan />
      <PaymentSummary plan={9.99} /> 
    </div>
  );
};

export default App;
