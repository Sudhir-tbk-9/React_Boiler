import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper } from '@mui/material';
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { smtpService } from '../../../apiServices/SMTP.service';
import { useLocation, useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';


function UpdateSMTPServer() {
    const navigate=useNavigate();
    const location = useLocation();
    const [formData , setFormData] = useState({})
    const [debugging, setDebugging] = useState(false); // State to manage the debugging checkbox


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    useEffect(()=>{
        const data = location.state.stateData;

        console.log('data ---->' ,data);
        
        setDebugging(data.debugging);

        setFormData(data)
    },[])

    const handleDebuggingChange = (event) => {
        setDebugging(event.target.checked); 
    };

    
    let handleSubmit = (e) =>{
        e.preventDefault();
        const { id } = formData;

        const post = {
            ...Object.fromEntries(new FormData(e.target)),
            id: id 
          };
        console.log('post values  ---->' ,post);
        smtpService.update(post,navigate)
    }
  return (
    <>
    <div style={{backgroundColor:'white'}} className='p-6'>
    <form className="bg-white w-full" onSubmit={handleSubmit}>

      <Grid container spacing={2} className=' mb-8'>
        <Grid item xs={6}>
          <div>
            <InputLabel
              htmlFor="name"
              style={{
                color: "#714B67",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              Name
            </InputLabel>
            <TextField
              id="name"
              variant="standard"
              required
              value={`${formData.name}`}

              name="name"
              className="w-full mt-2"
              onChange={(event) => setFormData(prevState => ({
                ...prevState,
                name: event.target.value // Update the formData.url
            }))}
              
             
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <InputLabel
              htmlFor="smtp_server"
              style={{
                color: "#714B67",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              SMTP Server
            </InputLabel>
            <TextField
              id="smtp_server"
              variant="standard"
              required
              value={`${formData.smtp_server}`}
              name="smtp_server"
              className="w-full mt-2"
              onChange={(event) => setFormData(prevState => ({
                ...prevState,
                smtp_server: event.target.value // Update the formData.url
            }))}
              
             
            />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2}  className=' mb-8'>
        {/* First half */}
        <Grid item xs={6}>
          <div>
            <InputLabel
              htmlFor="priority"
              style={{
                color: "#714B67",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              Priority
            </InputLabel>
            <TextField
              id="priority"
              variant="standard"
              value={`${formData.priority}`}
              type='number'
              onChange={(event) => setFormData(prevState => ({
                ...prevState,
                priority: event.target.value // Update the formData.url
            }))}
              required
              name="priority"
              className="w-full mt-2"
          
             
            />
          </div>
        </Grid>
        {/* Second half */}
        <Grid item xs={6}>
          <div>
            <InputLabel
              htmlFor="smtp_port"
              style={{
                color: "#714B67",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              SMTP Port
            </InputLabel>
            <TextField
              id="smtp_port"
              variant="standard"
              value={`${formData.smtp_port}`}
              type='number'
              onChange={(event) => setFormData(prevState => ({
                ...prevState,
                smtp_port: event.target.value // Update the formData.url
            }))}
              required
              name="smtp_port"
              className="w-full mt-2"
          
             
            />
          </div>
        </Grid>
      </Grid>




      <Grid container spacing={2} className=' mb-8'>
        {/* First half */}
        <Grid item xs={6}>
          <div>
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
              value={`${formData.username}`}
              required
              onChange={(event) => setFormData(prevState => ({
                ...prevState,
                username: event.target.value // Update the formData.url
            }))}
              name="username"
              className="w-full mt-2"
          
             
            />
          </div>
        </Grid>
        {/* Second half */}
        <Grid item xs={6}>
          <div>
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
              value={`${formData.password}`}
              onChange={(event) => setFormData(prevState => ({
                ...prevState,
                password: event.target.value // Update the formData.url
            }))}
              required
              name="password"
              className="w-full mt-2"
          
             
            />
          </div>
        </Grid>
      </Grid>


      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>
          <FormLabel id="demo-row-radio-buttons"><b>Connection</b></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="connection"
              value={`${formData.connection}`}

            >
              <FormControlLabel value="None" control={<Radio />} label="None" />
              <FormControlLabel value="TLS/StartTLS" control={<Radio />} label="TLS/StartTLS" />
              <FormControlLabel value="SSL/TLS" control={<Radio />} label="SSL/TLS" />
              
            </RadioGroup>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
          <InputLabel
              htmlFor="debugging"
              style={{
                color: "#714B67",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              Debugging
            </InputLabel>
            
                 <Checkbox
    {...label}
    checked={debugging} 
    onChange={handleDebuggingChange}
/>
          </div>
        </Grid>
      </Grid>

      <div className="mt-5">
                  <button
                    className="flex justify-center items-center gap-1  w-24 h-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#63ADF2] via-[#63ADF2] to-[#63ADF2] hover:scale-105 duration-300">
                    Submit
                  </button>
                  </div>
                </form> 
                </div>
      
    </>
  );
}

export default UpdateSMTPServer;
