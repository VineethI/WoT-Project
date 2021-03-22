import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Register = () => {
  return (
    <div className="login">
      <h3 className="loginHeader">Hey...Good to see you again!!</h3>
      <input type="email" placeholder="Enter Your Email" className="email" />
      <input type="password" placeholder="Enter Your Password" className="password" />
      <div className="logButtons">
        <Link to="/dashboard">
          <button className="logInButton">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
