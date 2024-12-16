import TextField from "@mui/material/TextField";
import React, { useState } from "react";
function Tab2() {
  return (
    <>
      <div id="userform" className=" mt-10 font-semibold">
        <div>
          <h1 className="o_horizontal_separator mt-4 mb-3 text-uppercase font-bold small text-sm">
          ACCOUNTING
          </h1>
          <hr />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className=" small text-sm">
              Accounting 
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small" fullWidth />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className=" small text-sm">
              Bank 
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small" fullWidth />
            </div>
          </div>

        

         
        </div>

        <div>
          <h1 className="o_horizontal_separator mt-4 mb-3 text-uppercase small font-bold text-sm">
          INVENTORY
          </h1>
          <hr />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className=" small text-sm">
              Inventory 
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className=" small text-sm">
              Purchase 
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>


         
        </div>
      </div>
    </>
  );
}

export default Tab2;
