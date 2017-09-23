import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import PasswordForm from './components/PasswordForm'
import Message from './components/Message'
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    inputGiven: false,
    password: ''
  }

  updateState = () => {
    this.state.inputGiven === true ? this.setState({ inputGiven: false }) : this.setState({ inputGiven: true })
  }

  resetState = () => {
    this.setState({
      inputGiven: false,
      password: ''
    })
  }

  updatePassword = (newPassword) => {
    this.setState({ password: newPassword })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <br/><br/>
        {this.state.inputGiven === false && <PasswordForm updateState={this.updateState} updatePassword={this.updatePassword} />}
        {this.state.inputGiven === true && <Message password={this.state.password} updateState={this.resetState} />}
      </div>
    );
  }
}

export default App;
