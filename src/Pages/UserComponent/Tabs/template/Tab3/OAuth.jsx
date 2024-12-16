import React from "react";
import TextField from "@mui/material/TextField";

function OAuth() {
  return (
    <>
      <div className="mt-2 font-semibold mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="col-span-1" style={{ maxWidth: "50%" }}>
            <label htmlFor="" style={{ fontSize: "0.8rem" }}>
              OAuth Provider
            </label>
          </div>
          <div className="col-span-1">
            <TextField
              id="standard-basic"
              variant="standard"
              size="large"
              className="w-full"
            />
          </div>

          <div className="col-span-1" style={{ maxWidth: "50%" }}>
            <label htmlFor="" style={{ fontSize: "0.8rem" }}>
              OAuth User ID
            </label>
          </div>
          <div className="col-span-1">
            <TextField
              id="standard-basic"
              variant="standard"
              size="large"
              className="w-full"
            />
          </div>

          <div className="col-span-1" style={{ maxWidth: "50%" }}>
            <label htmlFor="" style={{ fontSize: "0.8rem" }}>
              OAuth Access Token
            </label>
          </div>
          <div className="col-span-1">
            <TextField
              id="standard-basic"
              variant="standard"
              size="large"
              className="w-full"
            />
          </div>
        </div>
      </div>

      
    </>
  );
}

export default OAuth;
