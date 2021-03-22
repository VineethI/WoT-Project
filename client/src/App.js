import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from './Components/Login/Login'
import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>
  );
};

export default App;
