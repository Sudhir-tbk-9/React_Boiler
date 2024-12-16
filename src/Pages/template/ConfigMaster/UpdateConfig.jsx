import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { Box, FormControlLabel, Grid, MenuItem ,Radio,RadioGroup,Select } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useDispatch , useSelector } from "react-redux";
import { Configure } from "../../../Redux/ActionCreator";
import { useLocation, useNavigate } from "react-router-dom";
import { configService } from "../../../apiServices/config.service";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function UpdateConfig() {
  const navigate=useNavigate();

    const location = useLocation();
    const [formData , setFormData] = useState({})

    // const dispatch = useDispatch();
    
    useEffect(()=>{
        const data = location.state.stateData;

        console.log('data ---->' ,data);

        setFormData(data)


    } , [])

    let handleSubmit = (e) => {
      e.preventDefault();
      const { id } = formData;
      const post = {
        ...Object.fromEntries(new FormData(e.target)),
        id: id,
        urlActive: formData.url_active === "true" // Convert string to boolean
      };
      console.log('post values  ---->', post);
      configService.updateService(post, navigate);
    }
    


  return (
    <>
      <div className=" border-solid border-black-500 border-2 bg-white p-6 shadow-md">
        <Box sx={{ flexGrow: 1 }}>
            <form className="bg-white w-full" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <InputLabel
                      htmlFor="url"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      URL
                    </InputLabel>
                    <TextField
                      id="url"
                      variant="standard"
                      required
                      name="url"
                      className="w-full mt-2 updateValues"
                      value={`${formData.url}`}
                      onChange={(event) => setFormData(prevState => ({
                            ...prevState,
                            url: event.target.value // Update the formData.url
                        }))}
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
                      className="w-full mt-2 updateValues"
                      value={`${formData.username}`}
                      onChange={(event) => setFormData(prevState => ({
                            ...prevState,
                            username: event.target.value // Update the formData.url
                        }))}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="pass"
                      style={{
                        color: "#714B67",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      Password
                    </InputLabel>
                    <TextField
                      id="pass"
                      variant="standard"
                      required
                      name="password"
                      className="w-full mt-2"
                      value={`${formData.password}`}
                      onChange={(event) => setFormData(prevState => ({
                            ...prevState,
                            password: event.target.value // Update the formData.url
                        }))}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="env"
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
                        id="env"
                        variant="standard"
                        className="w-full"
                        name="env"
                        value={`${formData.env ?? ""}`}
                        onChange={(event) => setFormData(prevState => ({
                            ...prevState,
                            env: event.target.value // Update the formData.url
                        }))}
                        label="Age">
                        <MenuItem value="DV">DV</MenuItem>
                        <MenuItem value="PY">PY</MenuItem>
                        <MenuItem value="PD">PD</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel
                      htmlFor="type"
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
                        id="type"
                        variant="standard"
                        className="w-full updateValues"
                        name="type"
                        value={`${formData.type ?? ""}`}
                        onChange={(event) => setFormData(prevState => ({
                            ...prevState,
                            type: event.target.value // Update the formData.url
                        }))}
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
                        className="updateValues"
                        value={`${formData.url_active === "true"}`}
                        onChange={(event) => setFormData(prevState => ({
                            ...prevState,
                            url_active: event.target.value // Update the formData.url
                        }))}
                      >
                        <FormControlLabel value={true} control={<Radio />} label="True" />
                        <FormControlLabel value={false} control={<Radio />} label="False" />
                    </RadioGroup> 
                </Grid>

            </Grid>
                  <div className="mt-5">
                  <button
                    className="flex justify-center items-center gap-1  w-24 h-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#63ADF2] via-[#63ADF2] to-[#63ADF2] hover:shadow-xl hover:shadow-blue-500 hover:scale-105 duration-300 hover:from-[#304D6D] hover:to-[#304D6D]">
                    Submit
                  </button>
                  </div>
                </form>      
        </Box>
    </div>
    </>
  );
}

export default UpdateConfig;
