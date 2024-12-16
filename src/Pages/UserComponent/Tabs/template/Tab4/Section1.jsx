import React from 'react'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function Section1() {
  return (
   <>
   <div id="userform" className=" mt-2">
        <div>
          <h1 className="o_horizontal_separator mt-4 mb-3 text-uppercase font-bold small text-sm">
          GOOGLE CALENDAR
          </h1>
          <hr />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              Refresh Token
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              User token
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              Token Validity
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small" fullWidth />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              Token Validity
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              Next Sync Token
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>


          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              Calendar ID
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>
        
<div className=' mt-7'>
<Button variant="contained" size='small' style={{backgroundColor:'gray'}}>Reset Account</Button>

</div>
         
        </div>

        <div>
          <h1 className="o_horizontal_separator mt-4 mb-3 text-uppercase small font-bold text-sm" >
          OUTLOOK CALENDAR
          </h1>
          <hr />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              Refresh Token
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small" fullWidth />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              User Token<sup style={{ color: "blue" }}>?</sup>
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              Token Validity
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>


          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              Lunch
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              Next Sync Token
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label htmlFor="salesField" className="fw-bolder small text-sm" style={{fontWeight:'500',color:'gray'}}>
              Last Sync Time
              </label>
            </div>
            <div className="col-span-1">
              <TextField id="standard-basic" variant="standard" size="small"  fullWidth/>
            </div>
          </div>

          <div className=' mt-7'>
<Button variant="contained" size='small' style={{backgroundColor:'gray'}}>Reset Account</Button>

</div>
        </div>
      </div>
   </>
  )
}

export default Section1