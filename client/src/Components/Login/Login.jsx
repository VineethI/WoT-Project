import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const logInUser = () => {
      axios.post('http://localhost:5000/api/auth', {
        email,
        password
      }).then(res => {
        console.log(res.data, 'User Logged In')
        axios.get("http://localhost:5000/temp").then(res => localStorage.setItem("temp", JSON.stringify(res.data)))
        axios.get("http://localhost:5000/hum").then(res => localStorage.setItem("hum", JSON.stringify(res.data)))
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("data", JSON.stringify(res.data.data));
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      
  }

  return (
    <div className="login">
      <Card className="logCard">
        <CardContent className="logCardContent">
          <h3 className="loginHeader">Hey...Good to see you again!!</h3>
          <TextField value={email} onChange={(e) => {setEmail(e.target.value)}} className="email" id="outlined-basic" label="Email" variant="outlined"/>
          <TextField value={password} onChange={(e) => {setPassword(e.target.value)}} className="password" id="outlined-basic" type="password" label="Password" variant="outlined"/>
          <CardActions className="logCardActions">
            <div className="logButtons">
              <Link onClick={logInUser} to="/dashboard">
                <Button className="logInButton" variant="contained" color="primary">Log In</Button>
              </Link>
            </div>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
