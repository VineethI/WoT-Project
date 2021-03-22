import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <h3 className="registerHeader">Register to check the Readings</h3>
      <input type="email" placeholder="Enter Your Email" className="email" />
      <input type="password" placeholder="Enter Your Email" className="password" />
      <div className="regButtons">
        <Link to="/login">
          <button className="registerButton">Register</button>
        </Link>
        <Link to="/login">
          <button className="signInButton">Already Registered....Sign In here</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
