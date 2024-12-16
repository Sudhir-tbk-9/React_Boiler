import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../Redux/ActionCreator";
import { useNavigate } from "react-router-dom";
import backgroundImage from "/src/assets/background.webp";

const generateCaptcha = () => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCaptcha(generateCaptcha());
    }, 60000); // Refresh CAPTCHA every 60 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const post = Object.fromEntries(formData);
    if (captchaInput !== captcha) {
      alert("CAPTCHA does not match. Please try again.");
      setCaptcha(generateCaptcha());
      return;
    }
    dispatch(userLogin(post, navigate));
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-100">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-gradient-x"></div>
        </div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white p-3 rounded-full mb-4 shadow-lg">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/mountain.png"
              alt="Logo"
              className="w-12 h-12"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-white">Welcome Back</h2>
          <p className="mt-2 text-gray-200">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
          </div>

          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full gap-5 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </span>
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              name="captchaInput"
              placeholder="Enter CAPTCHA"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
          </div>

          <div className="flex items-center justify-between space-x-4">
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-2 flex-grow text-center">
              <span className="text-lg font-semibold tracking-wide text-white">{captcha}</span>
            </div>
            <button
              type="button"
              onClick={() => setCaptcha(generateCaptcha())}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              Refresh
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-400 hover:text-blue-500 transition duration-200">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition duration-200 transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-200">
          Don't have an account?{" "}
          <a href="#" className="font-medium text-blue-400 hover:text-blue-500 transition duration-200">
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;




// // // import React, {useEffect,useRef} from "react";
// // // import img from "../images/lege.mp4"
// // // import backImage from "../images/HomeBanner.mp4"
// // // import Image from "../images/jeremy-thomas-4dpAqfTbvKA-unsplash.jpg"
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { userLogin } from "../../../Redux/ActionCreator";
// // // import { useNavigate } from "react-router-dom";
// // // import axios  from "axios";



// // // const Login = () => {

// // //   let navigate  = useNavigate()

// // //     const videoRef = useRef(null);
// // //     // const userInfo = useSelector((state) => state.userLogin);
// // //     const dispatch = useDispatch();
    
// // //     useEffect(()=>{
// // //       if (videoRef.current) {
// // //         videoRef.current.playbackRate = 2;
// // //       }
// // //     },[])

// // //       let handleSubmit = async(e) =>{
// // //         e.preventDefault();
// // //         let post = Object.fromEntries(new FormData(e.target));
       
// // //         dispatch(userLogin(post , navigate));
       


// // //     }

    
    
// // //   return (
// // //     <>
   
// // //     <div className="min-h-screen py-10" style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}>
// // //       <div className="container-fluid mx-auto">
// // //         <div className=" flex flex-col lg:flex-row w-11/12 lg:w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden" style={{height : "87vh"}}>
// // //           <div
// // //             className="border border-violet-400 bg-transparent w-full lg:w-3/4 flex flex-col items-center justify-center p-0 bg-no-repeat bg-cover bg-center"
// // //             style={{backgroundColor: "#8185a8" , clipPath: "polygon(0% 0, 100% 0, 75% 100%, 0% 100%)"}}
// // //           >
// // //            <video id="videos" autoPlay loop muted style={{ aspectRatio: '4/3'   , objectFit : "fill"}} >
// // //           <source src={backImage} type="video/mp4" />
// // //         </video> 
// // //           </div>
// // //           <div className="flex flex-col justify-start items-center w-full lg:w-1/2 py-16 bg-white px-6">
            
// // //             <video ref={videoRef}  id="videod" autoPlay loop muted width={100} playbackrate="2" >
// // //             <source src={img} type="video/mp4" />
// // //             </video>
// // //             <h2 className="text-3xl mb-4 font-bold">Sign In To Continue</h2>

// // //             <form onSubmit={handleSubmit}>
// // //               <input
// // //                 required
// // //                 name="username"
// // //                 className={`rounded-full w-full bg-slate-100 mt-5 text-xl border border-fuchsia-300 px-2 py-1 placeholder-fuchsia-950 focus:text-black-400 focus:border-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-50`}
// // //                 placeholder="User Name"
// // //               /> 
// // //                <input
// // //                 required
// // //                 name="password"
// // //                 type="password"
// // //                 className={`rounded-full w-full bg-slate-100 mt-5 text-xl border border-violet-200 px-2 py-1 placeholder-fuchsia-950 focus:text-black-400 focus:border-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-50`}
// // //                 placeholder="Password"
// // //               />

// // //               <div className="mt-5">
// // //                 <button  className="w-full rounded-full bg-purple-500 py-3 text-center text-white font-bold">
// // //                   LOGIN
// // //                 </button>
// // //               </div>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //     </>
// // //   );
// // // };

// // // export default Login;
