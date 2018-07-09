import React, { Component } from 'react';
import LiveEdit from './components/LiveEdit';
import ResumeLayout from './components/ResumeLayout';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LiveEdit code={ResumeLayout}
                  noInline={true} />
      </div>
    );
  }
}

export default App;
