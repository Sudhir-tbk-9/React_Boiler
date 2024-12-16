import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { Box, FormControlLabel, Grid, MenuItem ,Radio,RadioGroup,Select } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { userService } from "../../../apiServices/UserService";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Adduser() {
  const navigate=useNavigate();

  let handleSubmit = (e) =>{
    e.preventDefault();
    let post = Object.fromEntries(new FormData(e.target));
    console.log('post values  ---->' ,post);
    userService.createUser(post,navigate);
}


  return (
    <>
      <div className=" border-solid border-black-500 border-2 bg-white p-6 shadow-md ">
        <Box sx={{ flexGrow: 1 }}>
            <form className="bg-white w-full" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <InputLabel
                      htmlFor="standard-basic"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Email
                    </InputLabel>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      required
                      name="email"
                      className="w-full mt-2"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="username"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Username
                    </InputLabel>
                    <TextField
                      id="username"
                      variant="standard"
                      required
                      name="username"
                      className="w-full mt-2"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="password"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Password
                    </InputLabel>
                    <TextField
                      id="password"
                      variant="standard"
                      required
                      name="password"
                      className="w-full mt-2"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="first_name"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      First Name
                    </InputLabel>
                    <TextField
                      id="first_name"
                      variant="standard"
                      required
                      name="first_name"
                      className="w-full mt-2"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="last_name"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Last Name
                    </InputLabel>
                    <TextField
                      id="last_name"
                      variant="standard"
                      required
                      name="last_name"
                      className="w-full mt-2"
                    />
                </Grid>
                {/* <Grid item xs={12} md={12}>
                    <InputLabel
                      htmlFor="vendor_code"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Vendor Code
                    </InputLabel>
                    <TextField
                      id="vendor_code"
                      variant="standard"
                      required
                      name="vendor_code"
                      className="w-full mt-2"
                    />
                </Grid> */}
                {/* <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="standard-basic"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Url Active
                    </InputLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="url_active"
                      >
                        <FormControlLabel value={true} control={<Radio />} label="True" />
                        <FormControlLabel value={false} control={<Radio />} label="False" />
                    </RadioGroup> 
                </Grid> */}

            </Grid>
                  <div className="mt-5">
                  <button
                    className="flex justify-center items-center gap-1  w-24 h-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#63ADF2] via-[#63ADF2] to-[#63ADF2] hover:scale-105 duration-300">
                    Submit
                  </button>
                  </div>
                </form>      
        </Box>
    </div>
    </>
  );
}

export default Adduser;

