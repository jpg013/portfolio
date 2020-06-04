import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './HomeGreeting.css';

const effectTimings = [
    {
      text: "Hi, ",
      throttleInMs: 40,
      delayInMs: 330
    },
    {
      text: "I'm Justin,",
      throttleInMs: 40,
      delayInMs: 950 
    },
];

const HomeGreeting = () => {
  const [ displayMsg, setDisplayMsg ] = useState(false);
  const typingEffectRef = useRef(null);

  // run effect once on mount
  useEffect(() => {
    setDisplayMsg(true);
    typingEffectRef.current.timings = effectTimings
  }, []);
  
  return (
    <div className="home-greeting">
      <div className="home-greeting-title">
        <h1>
          <typing-effect ref={ typingEffectRef }></typing-effect>
        </h1>
      </div>
      <div className="home-greeting-message">
        <CSSTransition in={ displayMsg } timeout={ 5000 } classNames="home-greeting-message-transition">
          <h2>a full-stack software engineer based out of the Kansas City area.</h2>
        </CSSTransition>
      </div>
    </div>
  )
}

export default HomeGreeting;