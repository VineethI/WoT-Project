import React, { useEffect } from "react";
import "./Dashboard.scss";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { loadUser } from "../../actions/authActions";
import store from "../../store";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import AccountCircle from "@material-ui/icons/AccountCircle";

const Dashboard = () => {
  const logOutUser = () => {
    localStorage.removeItem("token");
  };

  

  const Moisture = JSON.parse(localStorage.getItem("data"));
  const Temperature = JSON.parse(localStorage.getItem("temp"));
  const Humidity = JSON.parse(localStorage.getItem("hum"));

  const User = JSON.parse(localStorage.getItem("user"))

  const currentMoi = Moisture[Moisture.length - 1];
  const currentTemp = Temperature.data;
  const currentHum = Humidity.data
  console.log(currentHum)
  console.log(currentTemp)

  return localStorage.getItem("token") ? (
    <div className="dashboard">
      <AppBar className="appBar" position="static">
        <Toolbar className="toolbar" variant="dense">
          <Typography variant="h6">
            Environmental Monitoring Dashboard
          </Typography>
          <div className="logOut">
            <Link onClick={logOutUser} to="/login">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
            {/* <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
              </Menu> */}
          </div>
        </Toolbar>
      </AppBar>
      <Grid className="gridTopLeft" container spacing={2}>
        <Grid className="leftc1" item md={7}>
          <div className="dashboardIntro">
            <div>
              <h2>Hi {User.name}!</h2>
              <p>
                Welcome Back! The air quality is good & fresh. You can go out
                today
              </p>
              <h3>Find your readings:</h3>
              <p>Outdoor Temperature || Humidity || Moisture</p>
            </div>
            <div className="dashboardIntroImg"></div>
          </div>
          <div className="dashboardIntroImg"></div>
        </Grid>
        <Grid className="gridTopRight" container md={5} spacing={3}>
          <Grid className="centerc1" item md={9}>
            <div className="Temperature">
              <h2>Moisture</h2>
              <h1>{currentMoi.field1}</h1>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="gridMiddle" container spacing={2}>
        <Grid className="leftMid" item md={6}>
          <div className="Temperature">
            <h2>Humidity</h2>
            <h1>{currentHum[currentHum.length - 1].field1}</h1>
          </div>
        </Grid>
        <Grid className="gridMidRight" container md={6} spacing={3}>
          <Grid className="rightMid" item md={11}>
            <div className="Temperature">
              <h2>Temperature</h2>
              <h1>{currentTemp[currentTemp.length - 1].field1}</h1>
            </div>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid className="gridBottomLeft" container spacing={2}>
        <Grid className="light" item md={4}>
          <div className="dashboardIntro">Light Intensity</div>
        </Grid>
        <Grid className="gridBottomRight" container md={8} spacing={3}>
          <Grid className="bottomc1" item md={5}>
            Rain Values
          </Grid>
          <Grid className="bottomRightc1" item md={6}>
            CO2 Emissions
          </Grid>
        </Grid>
      </Grid> */}
    </div>
  ) : (
    <div>
      <Link to="/login">
        <h1>Not Authorized</h1>
        <button>Go to Login Page</button>
      </Link>
    </div>
  );
};

export default Dashboard;
