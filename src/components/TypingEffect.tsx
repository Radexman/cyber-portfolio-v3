import { useState, useEffect } from 'react';

function TypingEffect({ text }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentChar = 0;
    const typing = () => {
      if (currentChar < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(currentChar));
        currentChar++;
        setTimeout(typing, 50); // Adjust typing speed here
      }
    };

    typing();

    return () => {
      clearTimeout(typing);
    };
  }, [text]);

  return <div>{displayText}</div>;
}

export default TypingEffect;
