import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
import InputLabel from "@mui/material/InputLabel";
import React, { useState } from "react";


function LOCALIZATION() {
  const [selectedUserType, setSelectedUserType] = useState("");

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };
  return (
    <>
      <div id="userform" className=" mt-2 font-semibold">
        <div>
          <h1 className="o_horizontal_separator mt-4 mb-3 text-uppercase font-bold small text-sm">
            LOCALIZATION
          </h1>
          <hr />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="small text-sm">
                Language <sup style={{ color: "blue" }}>?</sup>
              </label>
            </div>
            <div className="col-span-1">
              <TextField
                id="standard-basic"
                variant="standard"
                size="small"
                fullWidth
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className=" small text-sm">
                Timezone <sup style={{ color: "blue" }}>?</sup>
              </label>
            </div>
            <div className="col-span-1">
              <TextField
                id="standard-basic"
                variant="standard"
                size="small"
                fullWidth
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className=" small text-sm">
                Dashboard <sup style={{ color: "blue" }}>?</sup>
              </label>
            </div>
            <div className="col-span-1">
              <TextField
                id="standard-basic"
                variant="standard"
                size="small"
                fullWidth
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="o_horizontal_separator mt-4 mb-3 text-uppercase font-bold small text-sm">
            MENUS CUSTOMIZATION
          </h1>
          <hr />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className=" small text-sm">
                Home Action <sup style={{ color: "blue" }}>?</sup>
              </label>
            </div>
            <div className="col-span-1">
              <TextField
                id="standard-basic"
                variant="standard"
                size="small"
                fullWidth
              />
            </div>
          </div>
        </div>{" "}

        <div className=" mt-5 mb-5">
              <label className=" font- text-sm">Notification:</label>
              <div className=" ml-40">
                <div>
                  <input
                    type="radio"
                    id="internalUser"
                    name="userType"
                    value="Internal User"
                    checked={selectedUserType === "Internal User"}
                    onChange={handleUserTypeChange}
                  />  &nbsp;
                  <label htmlFor="internalUser" className=" font-normal"> Handle by Emails</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="portalUser"
                    name="userType"
                    value="Portal"
                    className=" mr-1"
                    checked={selectedUserType === "Portal"}
                    onChange={handleUserTypeChange}
                  /> &nbsp;
                  <label htmlFor="portalUser" className=" font-normal">Handle in Odoo</label>
                </div>

           
              </div>
              {/* <p>Selected User Type: {selectedUserType}</p> */}
            </div>

      </div>



      <div>
      <div className="mb-4">
        <InputLabel htmlFor="standard-basic" style={{ color: "#714B67",fontSize:'0.8rem',fontWeight:'600' }}>
        OdooBot Status
        </InputLabel>
        <TextField id="standard-basic" variant="standard" className="w-full mt-2" />
      </div>

      <div className="mb-4">
        <InputLabel htmlFor="standard-basic" style={{ color: "#714B67",fontSize:'0.8rem',fontWeight:'600' }}>
        Email Signature
        </InputLabel>
        <TextField id="standard-basic" variant="standard" size="large" className="w-full mt-2" />
      </div>
      </div>


    <div className=" mt-7 font-semibold mb-4">
      <h3>VOIP</h3> 
      <hr />
       <div className=" flex justify-between mt-4">
        <label htmlFor="" style={{fontSize:'0.8rem'}}>OdooBot Status</label>
        <TextField id="standard-basic" variant="standard" size="large" className="w-full" />
       </div>

       <div className=" flex justify-between mt-5">
        <label htmlFor="" style={{fontSize:'0.8rem'}}>Email Signature</label>
        <TextField id="standard-basic" variant="standard" size="large" className="w-full" />
       </div>
      <div>

      </div>
    </div>
    </>
  );
}

export default LOCALIZATION;
