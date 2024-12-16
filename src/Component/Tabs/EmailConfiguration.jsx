import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material';
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

function EmailConfiguration({ formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <Grid container spacing={2} className=' mb-10'>
        {/* First half */}
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
              Username
            </InputLabel>
            <TextField
              id="name"
              variant="standard"
              required
              name="name"
              className="w-full mt-2"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </Grid>
        {/* Second half */}
        <Grid item xs={6}>
          <div>
            <InputLabel
              htmlFor="send_email"
              style={{
                color: "#714B67",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              From
            </InputLabel>
            <TextField
              id="send_email"
              variant="standard"
              required
              name="send_email"
              className="w-full mt-2"
              value={formData.send_email}
              onChange={handleChange}
            />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {/* First half */}
        <Grid item xs={6}>
          <div>
            <InputLabel
              htmlFor="cc"
              style={{
                color: "#714B67",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              cc
            </InputLabel>
            <TextField
              id="cc"
              variant="standard"
              required
              name="cc"
              className="w-full mt-2"
              value={formData.cc}
              onChange={handleChange}
            />
          </div>
        </Grid>
        {/* Second half */}
        <Grid item xs={6}>
          <div>
            <InputLabel
              htmlFor="to_email"
              style={{
                color: "#714B67",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              To (Emails)
            </InputLabel>
            <TextField
              id="to_email"
              variant="standard"
              required
              name="to_email"
              className="w-full mt-2"
              value={formData.to_email}
              onChange={handleChange}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default EmailConfiguration;
