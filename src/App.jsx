import { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ManualRouter } from "./ManualRouter";
import "./App.css";

// Lazy-loaded components
const Login = lazy(() => import("./Pages/template/Login/Login"));
const UserTable = lazy(() => import("./Pages/template/UserMaster/AllUserPage"));
const Dashboard = lazy(() => import("./Pages/template/DashBoard/Dashboard"));
const Adduser = lazy(() => import("./Pages/template/UserMaster/Adduser"));
const Scheduler = lazy(() => import("./Pages/template/Scheduler/Scheduler"));
const Configuration = lazy(() => import("./Pages/template/ConfigMaster/Configuration"));
const AddConfig = lazy(() => import("./Pages/template/ConfigMaster/AddConfig"));
const UpdateConfig = lazy(() => import("./Pages/template/ConfigMaster/UpdateConfig"));
const EditUser = lazy(() => import("./Pages/template/UserMaster/EditUser"));
const ChangePasswordForm = lazy(() => import("./Pages/template/ChangePassword/ChangePassword"));
const Profile = lazy(() => import("./Pages/template/UserInfo/Profile"));
const AddEmailConfig = lazy(() => import("./Pages/template/EmailConfig/AddEmailConfig"));
const SMTPserver = lazy(() => import("./Pages/template/SMTP Server/SMTPserver"));
const EmailConigList = lazy(() => import("./Pages/template/EmailConfig/EmailConfigList"));
const SMTPList = lazy(() => import("./Pages/template/SMTP Server/SMTPList"));
const UpdateSMTPServer = lazy(() => import("./Pages/template/SMTP Server/UpdateSMTPServer"));

// Routes configuration
const routes = { 
  "/Login": <Login />,
  "/users": <UserTable />,
  "/dashBoard": <Dashboard />, 
  "/adduser": <Adduser />,
  "/scheduler": <Scheduler />,
  "/configuraton": <Configuration />,
  "/addConfiguraton": <AddConfig />,
  "/updateConfiguration": <UpdateConfig />,
  "/updateUser": <EditUser />,
  "/changepassword": <ChangePasswordForm />,
  "/profile": <Profile />,
  "/addemail": <AddEmailConfig />,
  "/smtpserver": <SMTPserver />,
  "/allemailconfig": <EmailConigList />,
  "/allsmtplist": <SMTPList />,
  "/updatesmtp": <UpdateSMTPServer />,
};

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <ManualRouter routes={routes} />
      </Suspense>
    </Router>
  );
}

export default App;
