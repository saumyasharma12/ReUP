import React from 'react';
import './WhyUs.css'; 

const WhyUs = () => {
  return (
    <div className="why-we-container">
      <h2 className="heading">Why We</h2>
      <div className="rows-container">
        <div className="row">
          <div className="column">
            <div className="icon">🌟</div>
            <div className="title">Innovation</div>
            <div className="description">We push the boundaries to create new and exciting solutions.</div>
          </div>
          <div className="column">
            <div className="icon">🚀</div>
            <div className="title">Growth</div>
            <div className="description">We focus on growth and development for both our clients and ourselves.</div>
          </div>
          <div className="column">
            <div className="icon">🤝</div>
            <div className="title">Collaboration</div>
            <div className="description">We work together to achieve common goals and exceed expectations.</div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="icon">💡</div>
            <div className="title">Creativity</div>
            <div className="description">We embrace creativity to solve problems in unique ways.</div>
          </div>
          <div className="column">
            <div className="icon">🛠️</div>
            <div className="title">Reliability</div>
            <div className="description">We provide dependable solutions that you can count on.</div>
          </div>
          <div className="column">
            <div className="icon">🌍</div>
            <div className="title">Sustainability</div>
            <div className="description">We are committed to sustainable practices for a better future.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
