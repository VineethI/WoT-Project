import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Login/Login'
import Register from '../Register/Register'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <Router>
        <Route path="/" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
};

export default Home;
