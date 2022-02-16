import React from 'react';
import './RippleLoader.css';

const rippleLoader = () => {
  return (  
    <div className="ripple-loader-container">
      <div className="ripple-loader-circle"></div>
      <div className="ripple-loader-wave"></div>
      <div className="ripple-loader-wave-sec"></div>
    </div>
  )
};

export default rippleLoader;