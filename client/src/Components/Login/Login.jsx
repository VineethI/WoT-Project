import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

const Register = () => {
  return (
    <div className="login">
      <Card className="logCard">
        <CardContent className="logCardContent">
          <h3 className="loginHeader">Hey...Good to see you again!!</h3>
          <TextField className="email" id="outlined-basic" label="Email" variant="outlined"/>
          <TextField className="password" id="outlined-basic" type="password" label="Password" variant="outlined"/>
          <CardActions className="logCardActions">
            <div className="logButtons">
              <Link to="/dashboard">
              <Button className="logInButton" variant="contained" color="primary">Log In</Button>
              </Link>
            </div>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
