import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Front from './components/Front'
import Back from './components/Back'
import AppBar from './components/AppBar'

class App extends Component {

  render () {

    return (
      <Router>
        <div>
          <AppBar/>
        
          <Switch>
            <Route path="/front" exact component={Front}/>
            <Route path="/back" exact component={Back}/>
            <Route path="**" component={() => <h1>Not found</h1>} /> 
          </Switch>

        </div>
      </Router>
    )
  }
}



export default (App);

