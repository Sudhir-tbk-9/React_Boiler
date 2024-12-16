import axios from "axios";
import { base_url } from "../Global/Baseurl";
import { swal } from "../Global/Baseurl";

// GET API CALL
// POST API CALL
// PUT API CALL
// DELETE API CALL




export const userLogin = (post ,useNavigate) => {
  console.log('post data  ---->' ,post);
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(
        // `http://192.168.0.159:8000/api/rms/auth/login`,
        // `${base_url}/api/rms/auth/login`,
        `${base_url}/auth/token`,
        // `http://192.168.0.159:8001/api/rms/auth/login`,
        post,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      if(response.data?.error)
      {
        // swal("" , response.data.message , "error" , "OK")
      }
      else{
        console.log(response.data.username);

        // swal("Logged In" , response.data.token , "success" , "OK").then(()=>{
          dispatch({ type: "userToken", payload: response.data.token });
          localStorage.setItem('username',response.data.username)
        // })
      }
      useNavigate("/dashBoard") 
      localStorage.setItem("userToken", btoa(response.data.token))
      console.log(' response ---->' ,response);
    } catch (err) {

      console.log(`Error in user login` , err);
    }
  };
};


// export const userLogin = (post, useNavigate) => {
//   console.log('post data  ---->', post);
//   return async (dispatch, getState) => {
//     try {
//       const response = await fetch(`${base_url}/api/rms/auth/login`, {
//         method: 'POST',
//         // headers: {
//         //   "content-type": "application/json",
//         // },
//         body: JSON.stringify(post),
//         // mode: 'cors' // Set mode to 'cors' to bypass CORS policy issue

//       });




//       const responseData = await response.json();
//       console.log(responseData);

//       if (responseData.error) {
//         // swal("", responseData.message, "error", "OK");
//       } else {
//         swal("Logged In", responseData.token, "success", "OK").then(() => {
//           // useNavigate("/dashBoard");
//           // localStorage.setItem("userToken", btoa(responseData.token));
//         });
//       }

//       console.log(' response ---->', responseData);
//     } catch (err) {
//       console.log(`Error in user login`, err);
//     }
//   };
// };




export const Configure = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(id ? `${base_url}/configuration/configs/${id}` :`${base_url}/configuration/configs`, {
        headers: {
          Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
        },
      });
      dispatch({ type: "configuration", payload: response.data.data });
    console.log(' response ---->' ,response.data);
    }
    catch (err) {
      console.log(err);
    } 
  }
}


export const schedularGet = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`http://103.239.89.176:8081/jderest/v2/dataservice/table/F91300?$field=F91300.SCHJBTYP|F91300.SCHJBNM|F91300.SCHRPTNM|F91300.SCHVER|F91300.PROCNAME|F91300.SCHSTTIME|F91300.SCHENTIME|F91300.SCHJBSTAT&$filter=F91300.SCHRPTNM EQ *`, {
        headers: {
          Authorization: "Basic " + btoa(`GAURAV` + ":" + `Pernod@123`),
        },
      });
      // setTimeout(() => {
        dispatch({ type: "schedular", payload: response.data.fs_DATABROWSE_F91300.data.gridData.rowset });
      // }, 5000);
      console.log(' response ---->' ,response.data.fs_DATABROWSE_F91300.data.gridData.rowset);
    }
    catch (err) {
      console.log(err);
    } 
  }
}





export const updateConfigure = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.put(`${base_url}/configuration/updateconfig/${id}`, {
        headers: {
          Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
        },
      });

      dispatch({ type: "updateConfiguration", payload: response.data.data });
    }
    catch(err){
      console.log('error  ---->' ,err);
    }

     
      console.log(' response ---->' ,response.data);
  };
};


export const getUserInfo = () => {
  const [pagination, setPagination] = useState({ index: 0, size: 10 });
  const accessToken = atob(localStorage.getItem("userToken"))
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${base_url}/vendorUser/get?page=${pagination.index}&size=${pagination.size}`,
        {
          headers: {
            // "content-type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
        }
      );

      console.log('userwr Info ---->' , response);
      dispatch({ type: "userInfo", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRoles = () => {
  const accessToken = localStorage.getItem("accessToken");
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${base_url}/role/get-all`, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });
      dispatch({ type: "roles", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGroups = () => {
  const accessToken = localStorage.getItem("accessToken");
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${base_url}/group/get-all`, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });
      dispatch({ type: "groups", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRoleWithGroups = () => {
  const accessToken = localStorage.getItem("accessToken");
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${base_url}/role/get-all-with-group`, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });
      dispatch({ type: "rolesWithGroup", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSalesData = () => {
  const accessToken = localStorage.getItem("accessToken");
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${base_url}/sales/get-all`, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });
      dispatch({ type: "getSalesData", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const dashboardSalesTable = (data) => {
  const accessToken = localStorage.getItem("accessToken");
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(
        `${base_url}/sales/get-from-cities`,
        data,
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      dispatch({ type: "salesDashboardTableData", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const mapDataApi = () => {
  const accessToken = localStorage.getItem("accessToken");
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${base_url}/sales/get-total-by-city`, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });
      dispatch({ type: "mapData", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
};
