import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
  const [btns, setBtns] = useState([]);

  useEffect(() => {
    setBtns(btnData);
  }, []);

  return (
    <div>
      <TransitionGroup className="home-buttons">
        {
          btns.map(({ name, href, delayInMS }) => (
            <CSSTransition
              key={ name }
              timeout={ 5000 }
              classNames="home-btn-transition"
            >
              <div className="home-btn">
                <a href={href}>{name}</a>
              </div>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </div>
  )
}

export default HomeButtons;