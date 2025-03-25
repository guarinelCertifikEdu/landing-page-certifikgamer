'use client';
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, className = '' }) => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(prev => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default Typewriter;
