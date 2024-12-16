import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SidebarData, Navbar, BreadCrumb } from "./Global";
import PageNotFound from "./Global/PageNotFound";
import { Route, Routes, useNavigate , useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import { handleEvents } from "./Global/Baseurl";
// import { Suspense } from "react";

  const ManualRouter = ({routes}) => {
    const location = useLocation();
    const navigate = useNavigate();
    let pathname = location.pathname
    
    handleEvents(navigate)

  return (

   routes[pathname] ? (pathname == "/Login" ?
   (<Routes>
      <Route key={pathname} path={pathname} element={routes[pathname]} />
    </Routes>
   ) : 
   (<div className="flex">
   
    <div
      className="w-auto" style={{ backgroundColor: "rgb(94 234 212)"  , height:"100vh" , position : "sticky" , top : "0px" , left : "0px" , zIndex : "505"}}>
      <SidebarData />
    </div>
    <div className="bg-teal-100 w-screen" style={{position : "sticky" , top : "0px" , overflow : "hidden"}}>
        <Navbar />
      <div
        className="flex justify-start items-center shadow-md h-12 bg-teal-200"
        style={{ padding: "0px 24px" }}>
        <BreadCrumb navigate={useNavigate} />
      </div>
      <div className="p-6 px-3 bg-teal-100">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Routes>
            <Route key={pathname} path={pathname} element={routes[pathname]} />
          </Routes>
        {/* </Suspense> */}
      </div>
    </div>
  </div>
  )) : <PageNotFound/> 
  
  )}


 

export {ManualRouter}