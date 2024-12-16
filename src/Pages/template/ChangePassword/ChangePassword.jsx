import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Passwordservice } from "../../../apiServices/password.service.js";
import {  useSelector } from 'react-redux';


function ChangePasswordForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);


 
const username=localStorage.getItem('username')

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return;
    } else if (password === "" || confirmPassword === "") {
      return;
    }

    const payload = {
      password: password,
     
      username:username
    };

    try {
      setLoading(true);
      // console.log( payload);
      Passwordservice.updateService(payload,navigate);
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-solid border-black-500 border-2 bg-white p-4 shadow-md border-r-2 password_div">
        <div id="change_passowrd_div">
          <div>
            <span className="mr-2 font-semibold">New Password:</span>
          </div>

          <div>
            <TextField
              fullWidth
              required
              value={password}
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
              id="fullWidth"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              size="small"
            />
          </div>
        </div>

        <div id="change_passowrd_div">
          <div>
            <span className="mr-2 font-semibold">Confirm Password:</span>
          </div>

          <div>
            <TextField
              fullWidth
              required
              value={confirmPassword}
              variant="standard"
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              size="small"
            />
          </div>
        </div>

        <Grid item xs={12} mt={2}>
          <Button variant="contained" type="submit" disabled={loading} id="btn">
            {loading ? "Loading..." : "Submit"}
          </Button>
        </Grid>
      </div>
    </form>
  );
}

export default ChangePasswordForm;
