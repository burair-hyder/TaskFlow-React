import { useState, useEffect } from 'react';

/**
 * A custom hook that reads and writes data to localStorage.
 * It keeps React state in sync with the stored value.
 *
 * @param {string} key - The localStorage key to store the value under.
 * @param {*} initialValue - The fallback value if nothing is stored yet.
 * @returns {[*, function]} A stateful value and a setter to update it.
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`useLocalStorage: Error reading key "${key}"`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`useLocalStorage: Error writing key "${key}"`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}