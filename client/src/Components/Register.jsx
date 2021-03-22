import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <input />
      <input />
      <Link to="/login">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Sign In..</button>
      </Link>
    </div>
  );
};

export default Register;
