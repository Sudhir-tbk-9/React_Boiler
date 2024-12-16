import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import Button from "@mui/material/Button";
import {useLocation ,useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

export default function BreadCrumb() {
  const location = useLocation();
  const navigate = useNavigate();

  const renderButton = location.pathname === "/users";
  const renderButton2 = location.pathname === "/configuraton";
  const renderButton3 = location.pathname === "/allgroup";
  const renderButton4 = location.pathname === "/allemailconfig"; // New button for /allemailconfig route
  const renderButton5 = location.pathname === "/allsmtplist"; // 

  const addnewuser = () => {
    navigate("/adduser");
  };
  const handleClick = () => {
    navigate("/dashBoard");
  };

  const addConfig = () => {
    navigate("/addConfiguraton");
  };

  const addgroup = () => {
    navigate("/addgroup");
  };

  const addEmailConfig = () => {
    navigate("/addemail");
  };


  const addsmtpserver = () => {
    navigate("/smtpserver");
  };

  return (
    <>
      <div
        role="presentation"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "1.5rem",
          width: "100%",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <span
            to="/dashBoard"
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            onClick={handleClick}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </span>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href={`${window.location.pathname}`}
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {window.location.pathname.replace("/", "")}
          </Link>
        </Breadcrumbs>

        {renderButton && (
          <Button
            variant="contained"
            color="primary"
            size="small"
            id="btn"
            onClick={addnewuser}
          >
            Add New User
          </Button>
        )}
        {renderButton2 && (
          <Button
            variant="contained"
            color="primary"
            size="small"
            id="btn"
            onClick={addConfig}
          >
            Add Config
          </Button>
        )}
        {renderButton3 && (
          <Button
            variant="contained"
            color="primary"
            size="small"
            id="btn"
            onClick={addgroup}
          >
            Add Group
          </Button>
        )}
        {renderButton4 && ( 
          <Button
            variant="contained"
            color="primary"
            size="small"
            id="btn"
            onClick={addEmailConfig}
          >
            Add Email Config
          </Button>
        )}
          {renderButton5 && ( 
          <Button
            variant="contained"
            color="primary"
            size="small"
            id="btn"
            onClick={addsmtpserver}
          >
            Add SMTP Server
          </Button>
        )}
      </div>
    </>
  );
}
