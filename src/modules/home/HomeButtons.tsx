import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import './HomeButtons.css';

const btnData = [
  {
    name: 'portfolio',
    href: '/portfolio',
  },
  {
    name: 'my offer',
    href: '/skills-and-offer',
  },
  {
    name: 'resume',
    href: '/cv',
  },
];

const HomeButtons = () => {
  const defaultState: { name: string; href: string; }[] = [];
  const [btns, setBtns] = useState(defaultState);

  useEffect(() => {
    setBtns(btnData);
  }, []);

  return (
    <div>
      <TransitionGroup className="home-buttons">
        {
          btns.map(({ name, href }) => (
            <CSSTransition
              key={ name }
              timeout={ 5000 }
              classNames="home-btn-transition"
            >
              <div className="home-btn">
                <Link to={ href }>{ name }</Link>
              </div>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </div>
  )
}

export default HomeButtons;