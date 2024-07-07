import React from 'react';
import './Work.css'; 

const WorkComponent = () => {
  return (
    <div className="work-banner">
      <h1 className="heading">How Work Website</h1>
      <div className="stages">
        <div className="stage">
          <img src="path/to/check-price-logo.png" alt="Check Price" className="stage-logo" />
          <div className="stage-description">
            <h2><span className="stage-number">1</span> Check Price</h2>
            <p>Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you..</p>
          </div>
        </div>
        <div className="stage">
          <img src="path/to/schedule-pickup-logo.png" alt="Schedule Pickup" className="stage-logo" />
          <div className="stage-description">
            <h2><span className="stage-number">2</span> Schedule Pickup</h2>
            <p>Book a free pickup from your home or work at a time slot that best suits your convenience..</p>
          </div>
        </div>
        <div className="stage">
          <img src="path/to/get-paid-logo.png" alt="Get Paid" className="stage-logo" />
          <div className="stage-description">
            <h2><span className="stage-number">3</span> Get Paid</h2>
            <p>Did we mention you get paid as soon as our executive picks up your device? It\'s instant payment all the way!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
