import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  // console.log(defaultValue);
  // console.log(key);
  // console.log(window.localStorage.getItem(key));

  const [state, setState] = useState(() => {
    if (window.localStorage.length > 0) {
      return JSON.parse(window.localStorage.getItem(key));
    } else return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
