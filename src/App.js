import React, { Component } from 'react';
import styled from 'styled-components';
// import * as polished from 'polished';
import { cerulean, lightCerulean, text } from './utils/colors';
import LiveEdit from './components/LiveEdit';
import ResumeLayout from './components/ResumeLayout';
import ResumeContent from './data/resume.json';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const content = JSON.stringify(ResumeContent);
    const colors = { cerulean, lightCerulean, text };
    const scope = { styled, colors, content };

    return (
      <div>
        <header className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LiveEdit code={ResumeLayout} scope={scope} noInline={true} />
      </div>
    );
  }
}

export default App;
