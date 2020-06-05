import React from 'react';
import { HorizontalBarChart } from 'appComponents';
import './Offer.css';

const Offer = () => {
  return (
    <div className="board">
      <div class="board-title">
        <h1>My Offer</h1>
      </div>
      
      <div className="board-description">
        <p>I'm a full-stack software engineer with 8 years of experience. I have a wide range of experience in maintaining and developing both backend and frontend systems.</p>
      </div>

      <section className="skills-and-offer"> 
        <div className="skills-and-offer-section">
          <h2><span className="accent">frontend</span>&nbsp;development</h2>
          <div className="skill-item">
            <HorizontalBarChart width={ .3 } title="javascript" />
          </div>
        </div>
        <div className="skills-and-offer-section">
          <h2><span className="accent">backend</span>&nbsp;development</h2>
          <div className="skill-item">
            <HorizontalBarChart width={ .5 } />
          </div>
          <div className="skill-item">
            <HorizontalBarChart width={ .8 } />
          </div>
        </div>
      </section>
    </div>
  )
};

export default Offer;