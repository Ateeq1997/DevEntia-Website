'use client';
import React, { useState, useEffect, useRef } from 'react';

interface ScrollCounterProps {
  targetValue: number;
}

const ScrollCounter: React.FC<ScrollCounterProps> = ({ targetValue }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLHeadingElement | null>(null);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (countRef.current) {
        const rect = countRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasCounted) {
          startCounter();
          setHasCounted(true);
          window.removeEventListener('scroll', handleScroll); // Remove listener to prevent multiple triggers
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, [hasCounted]);

  const startCounter = () => {
    let currentCount = 0;
    const increment = Math.ceil(targetValue / 100); // Adjust the increment to control speed

    const counterInterval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetValue) {
        setCount(targetValue);
        clearInterval(counterInterval);
      } else {
        setCount(currentCount);
      }
    }, 80); // Adjust interval speed here
  };

  return (
    <h1 ref={countRef} className="text-7xl lg:text-[8rem] font-semibold">
      +{count}
    </h1>
  );
};

export default ScrollCounter;
