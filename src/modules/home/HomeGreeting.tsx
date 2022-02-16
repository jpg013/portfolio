import React, { useState, useEffect } from 'react';
import { TypingEffect } from '../../components/typingEffect';
import { CSSTransition } from 'react-transition-group';
import './HomeGreeting.css';

const effectTimings = [
  {
    throttleInMs: 40,
    delayInMs: 330,
    html: ["H","i",",","&nbsp;"]
  },
  {
    html: ["I", '\'', "m", "&nbsp;", "J", "u", "s", "t", "i", "n", ","],
    throttleInMs: 40,
    delayInMs: 950 
  },
];

const HomeGreeting = () => {
  const [ displayMsg, setDisplayMsg ] = useState(false);

  // run effect once on mount
  useEffect(() => {
    setDisplayMsg(true);
    // typingEffectRef.current.timings = effectTimings
  }, []);
  
  return (
    <div className="home-greeting">
      <div className="home-greeting-title">
        <h1>
          <TypingEffect effectTimings={ effectTimings } />
        </h1>
      </div>
      <div className="home-greeting-message">
        <CSSTransition in={ displayMsg } timeout={ 5500 } classNames="home-greeting-message-transition">
          <h2>a senior software engineer based out of the Kansas City area.</h2>
        </CSSTransition>
      </div>
    </div>
  )
}

export default HomeGreeting;