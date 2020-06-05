import React from 'react';
import { HorizontalBarChart } from 'appComponents';
import './SkillsAndOffer.css';
import data from './data.json';

const renderSkillSection = ({ display, items=[] }) => {
  const nameParts = display.split(" ");
  return (
    <div className="skills-and-offer-section" key={ display }>
      <h2><span className="accent">{ nameParts[0] }</span>&nbsp;{ nameParts[1] }</h2>
      {
        items
          .sort((a, b) => b.value - a.value)
          .map(curr => {
            return (
              <div className="skill-item">
                <HorizontalBarChart width={ curr.value } title={ curr.title } />
              </div>
            )
          })
      }
    </div>
  );
}

const SkillsAndOffer = () => {
  return (
    <div className="board">
      <div class="board-title">
        <h1>My Offer</h1>
      </div>
      <div className="board-description">
        <p>I'm a full-stack software engineer with 8 years of experience. I have a wide range of experience in maintaining and developing both backend and frontend systems.</p>
      </div>
      <section className="skills-and-offer"> 
        {
          data.map(renderSkillSection)
        }
      </section>
    </div>
  )
};

export default SkillsAndOffer;