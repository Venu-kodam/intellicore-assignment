import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { useInView } from '@/hooks/useInView';
const TypewriterText = ({ text, className = '', delay = 75 }) => {
  const [ref, isVisible] = useInView()
  const [done, setDone] = useState(false);

  return (
    <span ref={ref} className={className}>
      {isVisible && !done ? (
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay,
            cursor:null,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(text)
              .callFunction(() => setDone(true))
              .start();
          }}
        />
      ) : (
        done && <span dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </span>
  );
};

export default TypewriterText;
