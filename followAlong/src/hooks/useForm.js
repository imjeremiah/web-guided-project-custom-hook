import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

//Create useForm Custom Hook:
//1. Make a function called useForm.
//2. Add in all stateful logic into this hook.
//3. Return all needed values from this hook.
//4. Replace useState with useForm.
const useForm = (initName) => {
    const [values, setValue] = useLocalStorage("form", initName);
  
    const handleChanges = e => {
      setValue({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValue(initName);
    };
  
    return([values, handleChanges, clearForm]);
}

export default useForm;