import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Forgotpassword = () => {
  const [Email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    Email: "",
  });

  const handleChange = (e) => {
    setEmail(e.target.value); // Update the email state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { ...errors };

    // Email validation
    if (!Email.trim()) {
      newErrors.Email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      newErrors.Email = "Email is invalid";
      formIsValid = false;
    } else {
      newErrors.Email = "";
    }
    if (!formIsValid) {
      setErrors(newErrors);
      return; // Stop form submission if validation fails
    }

    // Assuming a function to send the reset link
    sendResetLink(Email)
      .then((response) => {
        console.log(response);
        // Update message state to display success message
        setMessage("We have successfully sent a reset link to your email");
      })
      .catch((err) => {
        setMessage("User does not exist");
        console.log("error is ", err);
      });
  };

  // Mock function to simulate sending reset link
  const sendResetLink = (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@example.com") {
          resolve({ success: true });
        } else {
          reject({ error: "User does not exist" });
        }
      }, 1000);
    });
  };

  return (
    <div className="pagecontainer" style={{ fontFamily: "Gill Sans" }}>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>Enter your Email:</label>
          <input
            type="email"
            name="Email"
            value={Email}
            onChange={handleChange}
          />
          <span style={{ color: "red" }}>{errors.Email}</span>
        </div>
        <div className="msg">
          <button type="submit" className="registerbtn">
            Send
          </button>
        </div>
        {message === "User does not exist" && (
          <div className="flex justify-between w-full">
            <div>
              <Link to="/register/User" className="primary hover:text-blue-700">
                Register
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Forgotpassword;
