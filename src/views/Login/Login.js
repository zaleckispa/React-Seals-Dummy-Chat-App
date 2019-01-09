import React, { Component } from 'react';
import SignIn from '../../components/SignIn';

class Login extends Component {
  state = {
    signinMode: false
  }

  signinModeHandler = () => {
    this.setState(prevState => ({
      signinMode: !prevState.signinMode
    }));
  }

  chatViewHandler = () => {
    this.props.history.push("/chat")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Fancy Chat App</p>
          <SignIn />
        </header>
      </div>
    );
  }
}

export default Login;