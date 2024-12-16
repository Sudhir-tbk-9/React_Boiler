import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
// import Upload from "../../../TestModule/template/ImageUpload";
// import AddUserTab from "../UserComponent/AddUserTab";
// import { getRoles } from "../../../Redux/ActionCreator";

function UserForm() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");


  let newuser = {
    name: Name,
    email: Email,
    password: password,
  };

  // const handleAddUser = async () => {

  //   if (!Email || !password || !Name) {
  //     SwalFunction("warning", "Cannot Proceed with Blank Fields ");
  //     return;
  //   }
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   if (!emailRegex.test(Email)) {
  //     SwalFunction("warning", "Please enter a valid email address");
  //     return;
  //   }
  //   let newuser = {
  //     name: Name,
  //     email: Email,
  //     password: password,
  //   };
  //   let accessToken = localStorage.getItem("accessToken");

  //   try {
  //     const response = await axios.post(`${base_url}/user/add-user`, newuser, {
  //       headers: {
  //         "content-type": "application/json",
  //         Authorization: "Bearer " + accessToken,
  //       },
  //     });
  //     console.log(response.data);

  //     navigate("/alluser");
  //     SwalFunction("success", response.data);
  //   } catch (error) {
  //     console.log(error);
  //     let text = JSON.stringify(error.response.data.errorMessage);
  //     SwalFunction("error", text);
  //   }

  // };
  return (
    <div className=" border-solid border-black-500 border-2 bg-white p-6 shadow-md ">
      <div id="uploadimg">
        <div>
          <div className="mb-4">
            <InputLabel
              htmlFor="standard-basic"
              style={{
                color: "#714B67",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              Name
            </InputLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              className="w-full mt-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
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
              size="large"
              className="w-full mt-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
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
              size="large"
              className="w-full mt-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className=" my-4">
            <Button id="btn" style={{ color: "white" }} onClick={handleAddUser} size="small">
            {loading ? "Loading..." : "Create Account"}
            </Button>
          </div> */}
        </div>

        <div className=" flex justify-self-end">
          {/* <Upload /> */}
        </div>
      </div>
      {/* <Tabs/>    */}
      {/* <AddUserTab newuser={newuser} /> */}
    </div>
  );
}

export default UserForm;
