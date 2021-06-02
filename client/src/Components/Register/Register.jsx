import React, {useState} from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./Register.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import TextField from '@material-ui/core/TextField';

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerUser = () => {
      axios.post('http://localhost:5000/api/users', {
        name,
        email,
        password
      }).then(res => {
        console.log("User Registered")
      })
      
  }

  return (
    <div className="register">
      <Card  className="regCard">
        <CardContent className="regCardContent">
          <h3 className="registerHeader">Register to check the Readings</h3>
          <TextField value={name} onChange={(e) => {setName(e.target.value)}} className="email" id="outlined-basic" label="Name" variant="outlined"/>
          <TextField value={email} onChange={(e) => {setEmail(e.target.value)}} className="email" id="outlined-basic" label="Email" variant="outlined"/>
          <TextField value={password }onChange={(e) => {setPassword(e.target.value)}} className="password" id="outlined-basic" type="password" label="Password" variant="outlined"/>
          <CardActions className="regCardActions">
            <div className="regButtons">
              <Link onClick={registerUser} to="/login">
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
