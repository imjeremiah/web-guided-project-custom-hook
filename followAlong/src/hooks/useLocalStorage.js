import { useState} from 'react';

const useLocalStorage = (key, initValue) => {
    //useLocalStorage
    //1. when we set our initialValue check to see if we have saved a localStorage value
    //2. if that localStorage value exists: set initial value to localStorage value
    //3. if it does not exist: set initial value initValue && localStorage value initValue
    //4. Any time we setState, also set localStorage
  
    const [ value, setValue] = useState(()=> {
      if (localStorage.getItem(key)) {
        return(JSON.parse(localStorage.getItem(key)))
      } else {
        localStorage.setItem(key, JSON.stringify(initValue));
        return(initValue);
      }
    });
  
    const setStoredValue = (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    }
  
    return[value, setStoredValue];
  }

export default useLocalStorage;