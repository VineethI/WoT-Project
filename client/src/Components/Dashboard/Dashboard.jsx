import React from "react";
import "./Dashboard.scss";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom'
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <AppBar className="appBar" position="static">
        <Toolbar className="toolbar" variant="dense">
          <Typography variant="h6">
            Environmental Monitoring Dashboard
          </Typography>
          <div className="logOut">
            <Link to="/login">
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
              <h2>Hi User!</h2>
              <p>
                Welcome Back! The air quality is good & fresh. You can go out
                today
              </p>
              <h3>+25 Celcius</h3>
              <p>Outdoor Temperature</p>
              <p>Fuzzy Cloudy Weather</p>
            </div>
            <div className="dashboardIntroImg"></div>
          </div>
          <div className="dashboardIntroImg"></div>
        </Grid>
        <Grid className="gridTopRight" container md={5} spacing={3}>
          <Grid className="centerc1" item md={5}>
            Humidity
          </Grid>
          <Grid className="rightc1" item md={5}>
            Pressure
          </Grid>
        </Grid>
      </Grid>
      <Grid className="gridMiddle" container spacing={2}>
        <Grid className="leftMid" item md={6}>
          <div className="graph">Graph</div>
        </Grid>
        <Grid className="gridMidRight" container md={6} spacing={3}>
          <Grid className="rightMid" item md={11}>
            Air Quality Meter
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
  );
};

export default Dashboard;
