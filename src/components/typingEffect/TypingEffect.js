import React, { useEffect, useRef } from 'react';

const TypingEffect = ({ effectTimings=[] }) => {
  const ref = useRef();

  const renderCh = (ch, timeout) => {
    setTimeout(() => {
      ref.current.innerHTML += ch;
    }, timeout);
  }
  
  useEffect(() => {
    effectTimings.forEach(curr => {
      const { html, throttleInMs, delayInMs } = curr;
      
      html.forEach((ch, idx) => {
        const timeout = delayInMs + (idx * throttleInMs);
        renderCh(ch, timeout);
      })
    })
  }, [effectTimings]);

  return (
    <span ref={ ref }></span>
  );
};

export default TypingEffect;
