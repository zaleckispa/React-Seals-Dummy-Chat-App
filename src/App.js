import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Fancy Chat App</p>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        </header>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
