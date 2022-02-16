import cx from 'classnames';
import { BasicChip } from '../../components/basicChip';

const renderOverview = (overview: string[]) => {
  if (!overview.length) {
    return null;
  }

  return (
    <div className="project-overview">
      <ul>
        {
          overview.map((curr, idx) => {
            return (
              <li key={ idx }>{ curr }</li>
            );
          })
        }
      </ul>
    </div>
  );
};

const renderTechnologies = (tech: { url: string; name: string; }[]) => {
  if (!tech.length) {
    return null;
  }

  return (
    <div className="project-technologies">
      <h3>technologies</h3>
      <ul>
        {
          tech.map((curr, idx) => {
            return (
              <li key={ idx }>
                <a target="_blank noopener noreferrer" href={ curr.url }>
                  <BasicChip text={ curr.name } />
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

type PortfolioData = {
  url: string;
  name: string;
  date: string;
  overview: string[];
  description_html: string;
  images: string[];
  tech: {
    url: string;
    name: string;
  }[];
};

const PortfolioTimeline = ({ data, showBorder }: { data: PortfolioData; showBorder: boolean }) => {
  const cns = cx('project-contents', {
    'no-border': !showBorder,
  })
  
  return (
    <li className="timeline-element">
      <div className="timeline-date">
        <div>{ data.date }</div>
      </div>
      <div className={ cns }>
        <div className="project-details">
          <div className="project-title">
            <a target="_blank noopener noreferrer" href={ data.url }>{ data.name } </a>
          </div>
          <div 
            className="project-text" 
            dangerouslySetInnerHTML={{ __html: data.description_html }}>
          </div>
          { renderOverview(data.overview) }
          { renderTechnologies(data.tech) }
        </div>
        <div className="project-gallery">
          {
            data.images.map((url, idx) => {
              return (
                <div key={ idx } className="project-image-container">
                  <img alt="project-img" className="project-image" src={ url } />
                </div>
              )
            })
          }
        </div>
      </div>
    </li>
  );
};

export default PortfolioTimeline;