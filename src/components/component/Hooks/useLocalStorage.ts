import {useState} from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (x: T) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setValue = (newValue: T) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const valueToStore =
        newValue instanceof Function ? newValue(storedValue) : newValue;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {}
  };
  return [storedValue, setValue];
};
export default useLocalStorage;
