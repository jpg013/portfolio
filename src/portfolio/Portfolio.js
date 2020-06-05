import React from 'react';
import PortfolioTimeline from './PortfolioTimeline';
import './Portfolio.css';
import data from './data.json';

const Portfolio = () => {
  return (
    <div className="board">
      <div className="board-title">
        <h1>portfolio</h1>
      </div>
      <div className="board-description">
        <p>See my works below. For any questions, please <a href="/contact-me">contact me</a> and I'll be happy to respond in a timely manner.</p>
      </div>
      <div className="portfolio-timeline">
        <ul>
          {
            data.map((curr, idx) => (
              <PortfolioTimeline key={ idx } data={ curr } />
            ))
          }
        </ul>
      </div>
    </div>
  )
};

export default Portfolio;