import PortfolioTimeline from './PortfolioTimeline';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import data from './data.json';

const Portfolio = () => {
  return (
    <div className="board">
      <div className="board-title">
        <h1>portfolio</h1>
      </div>
      <div className="board-description">
        <p>See my works below. For any questions, please <Link to="/contact-me">contact me</Link> and I'll be happy to respond in a timely manner.</p>
      </div>
      <div className="portfolio-timeline">
        <ul>
          {
            data.map((curr, idx) => (
              <PortfolioTimeline key={ idx } data={ curr } showBorder = { idx !== 0 } />
            ))
          }
        </ul>
      </div>
    </div>
  )
};

export default Portfolio;