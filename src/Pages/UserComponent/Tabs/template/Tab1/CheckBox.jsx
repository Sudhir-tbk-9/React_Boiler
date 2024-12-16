import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoleWithGroups,
  getRoles,
} from "../../../../../../Redux/ActionCreator";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SwalFunction from "../../../../../../Global/template/Swal";
import base_url from "../../../../../../Global/template/Baseurl";

function CheckBox(props) {
  const [checkedRoles, setCheckedRoles] = useState({});
  let newuser = props.newuser;
  console.log(newuser, "from checkbox");
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const roleswithgroups = useSelector((state) => state.rolesWithGroup);
  const dispatch = useDispatch();
  console.log(roleswithgroups, "roleswithgroups");

  useEffect(() => {
    dispatch(getRoleWithGroups());
  }, []);

  const handleCheckboxChange = (groupCode, role) => {
    setCheckedRoles((prevRoles) => {
      const isChecked = prevRoles[`${groupCode}-${role}`];
      return {
        ...prevRoles,
        [`${groupCode}-${role}`]: !isChecked,
      };
    });
  };

  const handleSubmit = async () => {
    const selectedRoles = Object.entries(checkedRoles)
      .filter(([key, value]) => value)
      .map(([key]) => {
        const [, role] = key.split("-");
        return role;
      });

    console.log("Selected Roles:", selectedRoles);
    console.log(newuser, "from checkbox");

    let adduser = {
      name: newuser.name,
      email: newuser.email,
      password: newuser.password,
      listOfRoles: selectedRoles,
    };

    try {
      // setLoading(true); // Set loading state to true before API call

      const response = await axios.post(`${base_url}/user/add-user`, adduser, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });
      console.log(response.data);
      

      navigate("/alluser");
      SwalFunction("success", response.data);
    } catch (error) {
      console.log(error);
      let text = JSON.stringify(error.response.data.errorMessage);

      SwalFunction("error", text);
    }
  };

  return (
    <>
      <div id="userform" className="mt-6">
        {roleswithgroups.map((group, index) => (
          <div key={group.groupCode}>
            <h5>{`Group Code: ${group.groupCode}`}</h5>
            <hr />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="col-span-1">
                <ul>
                  {group.listOfRole.map((role) => (
                    <li key={role.role}>
                      <label className="mb-3 font-medium">{role.role}</label>
                      <br />
                      <br />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-1">
                <ul>
                  {group.listOfRole.map((role) => (
                    <li key={role.role} className="mb-3">
                      <Checkbox
                        checked={
                          checkedRoles[`${group.groupCode}-${role.role}`] ||
                          false
                        }
                        onChange={() =>
                          handleCheckboxChange(group.groupCode, role.role)
                        }
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button onClick={handleSubmit} id="btn" variant="contained" size="small">
        Submit
      </Button>

      <br />
    </>
  );
}

export default CheckBox;
