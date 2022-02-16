import { useEffect, useRef } from 'react';

type ComponentProps = {
  effectTimings: {
    throttleInMs: number;
    delayInMs: number;
    html: string[];
  }[];
}

const TypingEffect = ({ effectTimings }: ComponentProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  const renderCh = (ch: string, timeout: number) => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.innerHTML += ch;
      }
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
