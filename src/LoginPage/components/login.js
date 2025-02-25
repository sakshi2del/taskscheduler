// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import "./styles.css";
// const Login = () => {
//   const navigate = useNavigate();
//   const { role } = useParams();
//   const [twoFactor, setTwoFactor] = useState(false);
//   const [message, setMessage] = useState("");
//   const [formData, setFormData] = useState({
//     Username: "",
//     Password: "",
//   });
//   const [errors, setErrors] = useState({
//     Username: "",
//     Password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="pagecontainer " style={{ fontFamily: "Gill Sans" }}>
//       <header className="header">
//         <h1>Login Page</h1>
//       </header>
//       <form>
//         <div className="">
//           <label>Username:</label>
//           <input
//             type="text"
//             name="Username"
//             value={formData.Username}
//             onChange={handleChange}
//             placeholder="Enter your UserName"
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="Password"
//             value={formData.Password}
//             onChange={handleChange}
//             placeholder="Enter your Password"
//           />
//         </div>

//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <div className="flex flex-col items-center">
//             <div className="mb-4">
//               <Link to="/Home" className="auth-button">
//                 Login
//               </Link>
//             </div>
//             <div className="flex justify-between w-full">
//               <div>
//                 <Link
//                   to="/forgotpassword"
//                   className="primary  hover:text-blue-700"
//                 >
//                   Forgot Password!!
//                 </Link>
//               </div>
//               <div className="ml-auto flex items-center">
//                 <Link
//                   to="/Register"
//                   className="primary hover:text-blue-700 flex items-center py-2 px-4 rounded-md"
//                 >
//                   Register Here
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-6 h-6 ml-2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
//                     />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex py-8 px-28">
//           <div className="flex ">{}</div>
//           <div className="flex ">{}</div>
//           <div className="flex ">{}</div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const navigate = useNavigate();
  const { role } = useParams();
  const [twoFactor, setTwoFactor] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
  });
  const [errors, setErrors] = useState({
    Username: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7284/api/User/login",
        formData
      );
      console.log(response.data);
      // Handle the response data as needed
      if (response.data.success) {
        navigate("/Home");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="pagecontainer " style={{ fontFamily: "Gill Sans" }}>
      <header className="header">
        <h1>Login Page</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>Username:</label>
          <input
            type="text"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
            placeholder="Enter your UserName"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            placeholder="Enter your Password"
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <button type="submit" className="auth-button">
                Login
              </button>
            </div>
            <div className="flex justify-between w-full">
              <div>
                <Link
                  to="/forgotpassword"
                  className="primary  hover:text-blue-700"
                >
                  Forgot Password!!
                </Link>
              </div>
              <div className="ml-auto flex items-center">
                <Link
                  to="/register"
                  className="primary hover:text-blue-700 flex items-center py-2 px-4 rounded-md"
                >
                  Register Here
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-8 px-28">
          <div className="flex ">{}</div>
          <div className="flex ">{}</div>
          <div className="flex ">{}</div>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
