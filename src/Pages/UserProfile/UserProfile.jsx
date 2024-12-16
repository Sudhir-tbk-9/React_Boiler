import React from "react";
import Navbar from "../../../Menu/template/Navbar";
import { SidebarData } from "../../../Menu/template/SidebarData";
import BreadCrumb from "../../../Global/template/BreadCrumb";
import UserprofileForm from "../../../Component/template/UserProfile/UserprofileForm";

function UserProfile() {
  return (
    <>
      <div
        className="customer1"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div>
          <SidebarData />
        </div>

        <div style={{ width: "100%" }} className=" bg-gray-200">
          {/* <ButtonAppBar/> */}
          <div style={{ position: "sticky", top: "0px", zIndex: "1000" }}>
            <Navbar />
          </div>
          <br />
          <div className="mb-2">
            <div
              className="  border-solid border-black-500 border-2 bg-white p-4 shadow-md border-r-2"
              style={{ position: "sticky", top: "4rem", zIndex: "10" }}
            >
              <BreadCrumb name={"User Profile"} />
            </div>
          </div>

          <div className=" p-4 ">
            <UserprofileForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
