import React from "react";
import "./Dashboard.scss";
import Grid from "@material-ui/core/Grid";

const Dashboard = () => {
  return (
    <div className="dashboard">
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
            <div className="dashboardIntroImg">

            </div>
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
          <div className="graph">
            Graph 
          </div>
        </Grid>
        <Grid className="gridMidRight" container md={6} spacing={3}>
          <Grid className="rightMid" item md={11}>
            Air Quality Meter
          </Grid>
        </Grid>
      </Grid>
      <Grid className="gridBottomLeft" container spacing={2}>
        <Grid className="light" item md={4}>
          <div className="dashboardIntro">
            Light Intensity
          </div>
        </Grid>
        <Grid className="gridBottomRight" container md={8} spacing={3}>
          <Grid className="bottomc1" item md={5}>
            Rain Values
          </Grid>
          <Grid className="bottomRightc1" item md={6}>
            CO2 Emissions
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
