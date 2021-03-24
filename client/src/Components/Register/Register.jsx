import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

const Register = () => {
  return (
    <div className="register">
      <Card  className="regCard">
        <CardContent className="regCardContent">
          <h3 className="registerHeader">Register to check the Readings</h3>
          <TextField className="email" id="outlined-basic" label="Name" variant="outlined"/>
          <TextField className="email" id="outlined-basic" label="Email" variant="outlined"/>
          <TextField className="password" id="outlined-basic" type="password" label="Password" variant="outlined"/>
          <CardActions className="regCardActions">
            <div className="regButtons">
              <Link to="/login">
                {/* <button className="registerButton">Register</button> */}
                <Button className="registerButton" variant="contained" color="primary">Register</Button>
              </Link>
              <Link to="/login">
                {/* <button className="signInButton">
                  Already Registered....Sign In here
                </button> */}
                <Button className="signInButton">Already Registered....Sign In here</Button>
              </Link>
            </div>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
