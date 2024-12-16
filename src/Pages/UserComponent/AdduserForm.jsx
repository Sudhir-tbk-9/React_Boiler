import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Autocomplete from "@mui/material/Autocomplete";
// import axios from "axios";
// import SwalFunction from "../../../Global/template/Swal";
// import base_url from "../../../Global/template/Baseurl";
import { useNavigate } from "react-router-dom";
// import Upload from "../../../TestModule/template/ImageUpload";
function Adduserform() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const Roles = ["ADMIN", "TEAM LEAD", "MANAGER", "USER"];

  const handleAddUser = async () => {
    if (!Email || !password || !Name || !selectedRoles) {
      // SwalFunction("warning", "Cannot Proceed with Blank Fields ");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(Email)) {
      // SwalFunction("warning", "Please enter a valid email address");
      return;
    }

    let newuser = {
      name: Name,
      email: Email,
      password: password,
      listOfRoles: selectedRoles,
    };
    let accessToken = localStorage.getItem("accessToken");

    console.log(newuser, "new user");
    try {
      const response = await axios.post(`${base_url}/user/add-user`, newuser, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });
      console.log(response.data);

      navigate("/alluser");
      // SwalFunction("success", response.data);
    } catch (error) {
      console.log(error);
      let text = JSON.stringify(error.response.data.errorMessage);

      // SwalFunction("error", text);
    }
  };

  return (
    <div
      id="userform"
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      style={{ height: "25rem" }}
    >
      {/* <div className=" border-solid border-black-500 border-2 bg-white p-4 shadow-md flex justify-center items-center">
        <Upload />
      </div> */}
      <div className=" border-solid border-black-500 border-2 bg-white p-4 shadow-md">
        <div className="grid grid-cols-2 gap-8 ">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <Autocomplete
            multiple
            id="tags-outlined"
            options={Roles}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            size="small"
            onChange={(event, newValue) => setSelectedRoles(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Role" placeholder="Roles" />
            )}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className=" mt-8">
          <Button
            variant="contained"
            style={{ backgroundColor: "rgb(33, 43, 54)" }}
            onClick={handleAddUser}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Adduserform;
