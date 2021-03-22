import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'

const App = () => {
  return(
    <Router>
      <Route path='/' exact component={Home}/>
      <Route path='/dashboard' exact component={Dashboard}/>
    </Router>
  )
}

export default App;
