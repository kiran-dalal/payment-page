import React from 'react';

const PaymentSummary = ({ plan }) => {
  const subscriptionFee = 9.99; // Sample subscription fee, adjust as per your requirements
  const total = subscriptionFee; // For simplicity, total is the same as subscription fee in this example

  const handleCancel = () => {
    // Logic for canceling the subscription
    console.log('Subscription canceled!');
  };

  const handleProceedToPay = () => {
    // Logic for proceeding to payment
    console.log('Proceeding to payment!');
  };

  return (
    <div>
      <h3>Payment Summary</h3>
      <p>Subscription Plan: {plan}</p>
      <p>Subscription Fee: ${subscriptionFee.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleProceedToPay}>Proceed to Pay</button>
    </div>
  );
};

export default PaymentSummary;
