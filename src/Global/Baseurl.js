import React, { useCallback, useEffect , useState } from "react";
import Swal  from "sweetalert2";
// const base_url = "http://192.168.0.146:8080";
// const base_url = "http://192.168.0.28:8080";
const base_url = "http://192.168.0.28:8080";
// const base_url = "http://192.168.0.159:8000";


const swal = async function (
    title,
    text,
    icon,
    confirmText,
    cancelButton,
    cancelText
  ) {
    return await Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: cancelButton,
      confirmButtonColor: "#283036e0",
      cancelButtonText: cancelText || "cancel",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmText,
    }).then(async (result) => {
      return await result.isConfirmed;
    });
  };

const handleEvents = (navigate) => {

 
  let backToLogin = function () {
    window.open(`/Login`, "_self");
  };

var count = 0 , updatedCount;

document.addEventListener("mouseover", function() {
  // code to execute when mouseover event occurs
  count = updatedCount | 0
});

document.addEventListener("click", function() {
  // code to execute when click event occurs
  count = updatedCount | 0
});

document.addEventListener("keypress", function() {
  // code to execute when keypress event occurs
  count = updatedCount | 0
});

useEffect(() => {
const interval = setInterval(() => {
  // console.clear()
  // console.log('count increasing values ---->', count);

  // if (count == 5)  {    //420
  //    updatedCount = 6;

  if (count == 420)  {    //420
     updatedCount = 421;

    swal("", "Do You Want To Continue Session", "question", "Yes", true, "NO").then((isConfirmed) => {
      isConfirmed ? count = updatedCount = 0 : navigate("/Login");
    })
  }
  if(count == 600) {
      backToLogin();
  }
  count++;
  
}, 1000);

  return () => clearInterval(interval);

}, [])
}


// const handleEvents = () => {
//     const [count, setCount] = useState(0);
//     // const [updatedCount, setUpdatedCount] = useState(0);
//     // var updatedCount;
  
//     // useEffect(() => {
//     //   const handleEvent = () => {
//     //     console.log('updatcount ---->' ,updatedCount);
//     //     setCount(updatedCount ?? 0);  
//     //     console.log("count reset", count);
//     //     console.log("count reset updatcount", updatedCount);
//     //   };
  
//     //   document.addEventListener("mouseover", handleEvent);
//     //   document.addEventListener("click", handleEvent);
//     //   document.addEventListener("keypress", handleEvent);
  
//     //   return () => {
//     //     document.removeEventListener("mouseover", handleEvent);
//     //     document.removeEventListener("click", handleEvent);
//     //     document.removeEventListener("keypress", handleEvent);
//     //   };
//     // }, [updatedCount]);
//     let handleCallback = useCallback((updateCount) => {
//       const handleEvent = () => {
//         console.log('updatcount ---->' ,updateCount);
//         setCount(updateCount ?? 0);  
//         console.log("count reset", count);
//         console.log("count reset updatcount", updateCount);
//       };
  
//       document.addEventListener("mouseover", handleEvent);
//       document.addEventListener("click", handleEvent);
//       document.addEventListener("keypress", handleEvent);
  
//       return () => {
//         document.removeEventListener("mouseover", handleEvent);
//         document.removeEventListener("click", handleEvent);
//         document.removeEventListener("keypress", handleEvent);
//       };
//     }, []);



//     handleCallback(0)
  
//     useEffect(() => {

//       const interval = setInterval(() => {
//         // console.clear();
//         console.log('count increasing values ---->', count);
  
//         if (count === 5) {
//           // setUpdatedCount(6);
//           handleCallback(6);
//         // if (count === 420) {
//           // setUpdatedCount(421);
  
//           swal("", "Do You Want To Continue Session", "question", "Yes", true, "NO").then((isConfirmed) => {
//             isConfirmed ? setUpdatedCount(0) : backToLogin();
//           });
//         }
//         if (count === 20) {
//         // if (count === 600) {
//           backToLogin();
//         }
//         setCount(prevCount => prevCount + 1);
//       }, 1000);
  
//       return () => clearInterval(interval);
//     }, []);
  
//     const backToLogin = () => {
//       console.log('Back to login');
//     };
//   };





// const handleEvents = () => {
//   const [count, setCount] = useState(0);
//   const [updatedCount, setUpdatedCount] = useState(0);

//   useEffect(() => {
//     const handleEvent = () => {
//       setCount(prevCount => updatedCount || 0);
//       console.log("count reset", count);
//       console.log("count reset", updatedCount);
//     };

//     document.addEventListener("mouseover", handleEvent);
//     document.addEventListener("click", handleEvent);
//     document.addEventListener("keypress", handleEvent);

//     return () => {
//       document.removeEventListener("mouseover", handleEvent);
//       document.removeEventListener("click", handleEvent);
//       document.removeEventListener("keypress", handleEvent);
//     };
//   }, [updatedCount, count]); // Include count in the dependencies array

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // console.clear();
//       console.log('count increasing values ---->', count);

//       if (count === 5) {
//         setUpdatedCount(prevUpdatedCount => prevUpdatedCount + 1); // Increment updatedCount by 1
//       // if (count === 420) {
//       //   setUpdatedCount(prevUpdatedCount => prevUpdatedCount + 1); // Increment updatedCount by 1

//         swal("", "Do You Want To Continue Session", "question", "Yes", true, "NO").then((isConfirmed) => {
//           isConfirmed ? setCount(0) : backToLogin();
//         });
//       }
//       if (count === 600) {
//         backToLogin();
//       }
//       setCount(prevCount => prevCount + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [count]); // Include count in the dependencies array

//   const backToLogin = () => {
//     console.log('Back to login');
//   };
// };




export {base_url , swal , handleEvents};
// http://192.168.0.167:8080/user/add-user
