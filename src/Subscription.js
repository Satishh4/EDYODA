import React, { useState, useEffect } from 'react';
import './Subscription.css';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  const handlePlanSelect = (event) => {
    const plan = event.target.value;
    const planPrice = event.target.getAttribute('data-price');
    setSelectedPlan(plan);
    setPrice(Number(planPrice));
    applyLimitedPeriodOffer(planPrice);
  };

  const handleCancel = () => {
    setSelectedPlan('');
    setPrice(0);
    setDiscountedPrice(0);
  };

  const handleProceedToPay = () => {
    // Add your logic for proceeding to payment here
    console.log(`Proceeding to pay for ${selectedPlan} with price ${price}`);
  };

  // Calculate total with GST tax
  const total = price + price * 0.18; // Assuming 18% GST tax

  const applyLimitedPeriodOffer = (planPrice) => {
    const discount = planPrice * 0.2; // Assuming a 20% discount
    setDiscountedPrice(planPrice - discount);
  };

  useEffect(() => {
    // Auto-select the Premium Plan and set the price
    setSelectedPlan('premium');
    setPrice(29);
    applyLimitedPeriodOffer(29);
  }, []);

  return (
    <div className="subscription-container">
      <div className="row">
        <div className="center">
          <button className="circle-button">
            <span className="circle-icon">1</span>
          </button>
          <span className="button-text">Sign Up</span>
        </div>
        <div className="center">
          <button className="circle-button">
            <span className="circle-icon">2</span>
          </button>
          <span className="button-text">Subscribe</span>
        </div>
      </div>

      <h2 className="titlee">Select Your Subscription Plan</h2>

      <div className="plan-row">
        <label className={`plan unclickable ${selectedPlan === '12-month' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="plan"
            value="12-month"
            data-price="99"
            checked={selectedPlan === '12-month'}
            onChange={handlePlanSelect}
            disabled
          />
          <h3>12-Month Plan</h3>
          <p>$99 / $8 per month</p>
          {selectedPlan === '12-month' && <span className="selected-icon">&#10003;</span>}
          <h3 className="offer-expired">Offer Expired</h3>
        </label>

        <label className={`plan ${selectedPlan === 'basic' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="plan"
            value="basic"
            data-price="99"
            checked={selectedPlan === 'basic'}
            onChange={handlePlanSelect}
          />
          <h3>12-Month Plan</h3>
          <p>Toal ₹170 </p>
          {selectedPlan === 'basic' && <span className="selected-icon">&#10003;</span>}
        </label>

        <label className={`plan ${selectedPlan === 'standard' ? 'selected' : ''} recommended`}>
        <input
            type="radio"
            name="plan"
            value="standard"
            data-price="59"
            checked={selectedPlan === 'standard'}
            onChange={handlePlanSelect}
          />
          <h3>Standard Plan</h3>
          <p>$59 / $5 per month</p>
          {selectedPlan === 'standard' && <span className="selected-icon">&#10003;</span>}
        </label>

        <label className={`plan ${selectedPlan === 'premium' ? 'selected' : ''} recommended`}>
          <input
            type="radio"
            name="plan"
            value="premium"
            data-price="29"
            checked={selectedPlan === 'premium'}
            onChange={handlePlanSelect}
          />
          <h3>Premium Plan</h3>
          <p>$29 / $2 per month</p>
          {selectedPlan === 'premium' && <span className="selected-icon">&#10003;</span>}
          <h3 className="offer-expired">Offer Expired</h3>
        </label>
      </div>

      {selectedPlan && (
        <div className="total">
          <h3>Subscription Fee: ${price}</h3>
          {selectedPlan !== '12-month' && (
            <div className="plan-row">
              <div className={`plan ${selectedPlan === 'limited' ? 'selected' : ''}`}>
                <div className="plan-info">
                  <h3>Limited Period Offer</h3>
                  <p>Offer valid till 30 Nov</p>
                </div>
                <div className="offer-price">Discounted Price: ${discountedPrice}</div>
              </div>
            </div>
          )}
          <h3>Total (incl. GST): ${total.toFixed(2)}</h3>
          <div className="button-row">
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleProceedToPay}>Pay Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;

