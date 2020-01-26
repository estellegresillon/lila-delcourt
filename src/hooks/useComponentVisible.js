import { useState, useEffect, useRef } from 'react';

export const useComponentVisible = (initialIsVisible, delay) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const [willDisappear, setWillDisappear] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setWillDisappear(true);
      setTimeout(() => {
        setIsComponentVisible(false);
        setWillDisappear(false);
      }, delay);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible, willDisappear };
};
