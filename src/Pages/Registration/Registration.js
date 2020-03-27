import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import service from "../../service/service";

// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  registration: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "35%",
    marginTop: theme.spacing(3)
  }
}));

function Registration() {
  const classes = useStyles();

  const [inputName, setInputValueName] = useState("");
  const [inputLogin, setInputValueLogin] = useState("");
  const [inputPassword, setInputValuePassword] = useState("");
  const [inputAge, setInputValueAge] = useState("");
  const [inputGender, setInputValueGender] = useState("");
  const [inputCountry, setInputValueCountry] = useState(undefined);
  const [currency, setCurrency] = React.useState("");

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    if (inputCountry === undefined) {
      getCountry();
    }
  });

  const getCountry = async () => {
    const allCountries = await service.getAllCountries();
    setInputValueCountry(allCountries);
  };

  const inputValueNameOnChange = event => {
    setInputValueName(event.target.value);
  };

  const inputValueLoginOnChange = event => {
    setInputValueLogin(event.target.value);
  };

  const inputValuePasswordOnChange = event => {
    setInputValuePassword(event.target.value);
  };

  const inputValueAgeOnChange = event => {
    setInputValueAge(event.target.value);
  };

  const inputValueGenderOnChange = event => {
    setInputValueGender(event.target.value);
  };

  const handleSubmit = async () => {
    const user = {
      name: inputName,
      login: inputLogin,
      password: inputPassword,
      age: inputAge,
      gender: inputGender,
      countryID: currency
    };
    const addOneUser = await service.addUser(user);
    console.log(addOneUser.config.data);
    return addOneUser;
  };

  return (
    <div className={classes.registration}>
      <TextField
        className={classes.input}
        id="name"
        label="Name"
        variant="outlined"
        onChange={inputValueNameOnChange}
      />
      <TextField
        className={classes.input}
        id="login"
        label="Login"
        variant="outlined"
        onChange={inputValueLoginOnChange}
      />
      <TextField
        className={classes.input}
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        onChange={inputValuePasswordOnChange}
      />
      <TextField
        className={classes.input}
        id="age"
        label="Age"
        variant="outlined"
        onChange={inputValueAgeOnChange}
      />
      <TextField
        className={classes.input}
        id="gender"
        label="Gender"
        variant="outlined"
        onChange={inputValueGenderOnChange}
      />
      <TextField
        className={classes.input}
        id="filled-select-currency"
        select
        label="Country"
        value={currency}
        onChange={handleChange}
        helperText="Please select your country"
        variant="outlined"
      >
        {inputCountry &&
          inputCountry.map(country => (
            <MenuItem key={country._id} value={country._id}>
              {country.country}
            </MenuItem>
          ))}
      </TextField>
      <Button onClick={handleSubmit} variant="contained">
        Primary
      </Button>
    </div>
  );
}

export default Registration;
