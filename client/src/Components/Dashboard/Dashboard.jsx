import React from 'react'
import './Dashboard.scss'
import Grid from '@material-ui/core/Grid';

const Dashboard = () => {
  return(
    <div className="dashboard">
        <Grid container spacing={3}>
          <Grid className="leftc1" item md={7}>
            <h2>Hi User!</h2>
            <p>Welcome Back! The air quality is good & fresh. You can go out today</p>
            <h3>+25 Celcius</h3>
            <p>Outdoor Temperature</p>
            <p>Fuzzy Cloudy Weather</p>
          </Grid>
          <Grid className="rightc2" item md={5}>
            Right
          </Grid>
        </Grid>
    </div>
  )
}

export default Dashboard;