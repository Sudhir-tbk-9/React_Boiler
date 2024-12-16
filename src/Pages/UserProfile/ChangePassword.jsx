import React from "react";
import Navbar from "../../../Menu/template/Navbar";
import { SidebarData } from "../../../Menu/template/SidebarData";
import BreadCrumb from "../../../Global/template/BreadCrumb";
import ChangePassowordForm from "../../../Component/template/ChangePassoword/ChangePassowordForm";

function ChangePassword() {
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
            <div className=" border border-solid border-black-500 border-2 bg-white p-4 shadow-md border-r-2">
              <BreadCrumb name={"Change Password"} />
            </div>
          </div>

          <div className=" p-4 ">
            {/* <UserForm/> */}
            <ChangePassowordForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
