import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import PasswordForm from './components/PasswordForm'
import Message from './components/Message'
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    inputGiven: false
  }

  updateState = () => {
    this.state.inputGiven === true ? this.setState({ inputGiven: false }) : this.setState({ inputGiven: true })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <br/><br/>
        {this.state.inputGiven === false && <PasswordForm updateState={this.updateState} />}
        {this.state.inputGiven === true && <Message updateState={this.updateState} />}
      </div>
    );
  }
}

export default App;
