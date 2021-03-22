import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login'
import Register from './Register'

const Home = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
};

export default Home;
