import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";

import useForm from './../hooks/useForm';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));


const useLocalStorage = (key, initValue) => {
  //useLocalStorage
  //1. when we set our initialValue check to see if we have saved a localStorage value
  //2. if that localStorage value exists: set initial value to localStorage value
  //3. if it does not exist: set initial value initValue && localStorage value initValue
  //4. Any time we setState, also set localStorage

  const [ value, setValue] = useState(()=> {
    return initValue;
  });

  return[value, setValue];
}

export default function SignupForm() {
  const classes = useStyles();

  const [ values, handleChanges, clearForm ] = useForm({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [name, setName ] = useLocalStorage("name", "Warren");

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${values.firstName} ${values.lastName} ${values.email}`);
  };

  return (
    <div p={2} className="form">
      <h1>{name}</h1>
      <button onClick={()=> {
        setName("Allison");
      }}>Change Name</button>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="First Name"
            className={classes.textField}
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Last Name"
            className={classes.textField}
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            name="email"
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}