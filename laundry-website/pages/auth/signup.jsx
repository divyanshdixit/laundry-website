import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LoadingButton } from "@mui/lab";
import { Button, InputAdornment, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import ResponsiveHeader from '../../components/Header/Header'
import '@/styles/signup.module.css';

export default function SignUp() {
  const [error, setError] = useState({});
  const [formDetails, setFormDetails] = useState({fullname:'', email:'', password:'', cpassword:''})
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const validateFormValues = (values) => {
    const errObject = {};
    const fullnameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const {fullname,email,password,cpassword} = values;
    if(fullname == ""){
      errObject.fullname = "Name can't be blank!";
    }else if(fullname.length < 3){
      errObject.fullname = "Name must be 3 chars long!";
    }else if(!fullnameRegex.test(fullname)){
      errObject.fullname = "Name can only have alphabets!";
    }

    if(!emailRegex.test(email)){
      errObject.email = "Invalid email!";
    }
    // setError(errObject);
    return errObject;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFormValues(formDetails);
    if(Object.keys(errors).length > 0){
      setError(errors);
      setIsFormSubmit(false);
      return false;
    }else{
      setError({});
      setIsFormSubmit(true);
      return true;
    }
  };

  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormDetails({...formDetails, [name]:value});
  }

  return (
    <>
      <ResponsiveHeader/>
    {
      (Object.keys(error).length === 0 && isFormSubmit) ? (
      <div>
      <p> Form submitted successfully</p> 
      <h4> form values are: </h4>
      {
        Object.keys(formDetails).map((value)=> {
          return <p> {value} : {formDetails[value]}</p>
        })
      }
      </div>
      ) : 
      (
        <>
      <Typography variant="h5">Sign Up</Typography>

      <Box
        component="form"
        id="signup_form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          error={error.state}
          required
          id="name"
          name="fullname"
          label="Name"
          placeholder="Name"
          variant="standard"
          helperText=""
          onChange={handleInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <span id="error_mess">{error.fullname}</span>
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          placeholder="Email Id"
          variant="standard"
          onChange={handleInput}
        />
        <span id="error_mess">{error.email}</span>
        {/*<TextField
          required
          id="password"
          name="password"
          label="Password"
          placeholder="password"
          variant="standard"
        />
        <span id="error_mess"></span>
        <TextField
          required
          id="cpassword"
          name="cpassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          variant="standard"
        />
        <span id="error_mess"></span> */}

        {/* <Button variant="contained" color="success" endIcon={<SendIcon />}>
            Submit
        </Button> */}
        <LoadingButton
          loading={false}
          type="submit"
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
          sx={{
            width: "11%",
          }}
        >
          Submit
        </LoadingButton>
      </Box>
      </>
      )
    }
    </>
  );
}
