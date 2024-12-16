import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { Box, FormControlLabel, Grid, MenuItem ,Radio,RadioGroup,Select } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { configService } from "../../../apiServices/config.service";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function AddConfig() {

  const navigate=useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let post = {
      url: formData.get('url'),
      username: formData.get('username'),
      password: formData.get('password'),
      env: formData.get('env'),
      type: formData.get('type'),
      urlActive: formData.get('url_active') === 'true', // Convert string to boolean
    };
    console.log('post values  ---->', post);
    configService.createService(post, navigate);
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
                      URL
                    </InputLabel>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      required
                      name="url"
                      className="w-full mt-2"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="standard-basic"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Username
                    </InputLabel>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      required
                      name="username"
                      className="w-full mt-2"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="standard-basic"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Password
                    </InputLabel>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      required
                      name="password"
                      className="w-full mt-2"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="standard-basic"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      ENV
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id=""
                        variant="standard"
                        className="w-full"
                        name="env"
                        label="Age">
                        <MenuItem value="DV">DV</MenuItem>
                        <MenuItem value="PY">PY</MenuItem>
                        <MenuItem value="PD">PD</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="standard-basic"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Type
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id=""
                        variant="standard"
                        className="w-full"
                        name="type"
                        label="Age">
                       <MenuItem value="JDE">JDE</MenuItem>
                        <MenuItem value="SB">SB</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={6} md={6}>
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
                </Grid>

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

export default AddConfig;
