import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './views/Login/Login';
import Chat from './views/Chat/Chat';
import Profile from './views/Profile/Profile';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/chat" component={Chat} />
        <Route path="/profile" component={Profile} />
      </Switch>
    );
  }
}

export default App;
