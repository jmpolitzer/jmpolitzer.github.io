import React, { Component } from 'react';
import styled from 'styled-components';
import ReactToPrint from 'react-to-print';
import IosPrinterOutline from 'react-icons/lib/io/ios-printer-outline';
import { cerulean, lightCerulean, text, lightText } from './utils/colors';
import LiveEdit from './components/LiveEdit';
import ResumeLayout from './components/ResumeLayout';
import ResumeContent from './data/resume.json';

import headshot from './headshot.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { previewRef: null, printMode: false };
    this.getPreviewRef = this.getPreviewRef.bind(this);
    this.setPrintMode = this.setPrintMode.bind(this);
    this.print = this.print.bind(this);
  }

  getPreviewRef(previewRef) {
    this.setState({ previewRef });
  }

  setPrintMode(mode) {
    this.setState({ printMode: mode });
  }

  print() {
    const Button = styled.button`
      background: rgb(176,176,176);
      color: white;
      padding: 10px;
      font-size: 22px;
    `;

    return <Button onMouseEnter={() => this.setPrintMode(true)}
                   onMouseLeave={() => this.setPrintMode(false)}>
             <IosPrinterOutline />
           </Button>
  }

  render() {
    const content = JSON.stringify(ResumeContent);
    const colors = { cerulean, lightCerulean, text, lightText };
    const printMode = this.state.printMode;
    const scope = { styled, colors, content, printMode };
    const ButtonContainer = styled.div`
      display: flex;
      justify-content: flex-end;
    `;

    return (
      <div>
        <header className="App">
          <img src={headshot} className="App-headshot" alt="headshot" />
          <h1 className="App-title">Hi, I'm Jay. I'm glad you stopped by.</h1>
        </header>
        <ButtonContainer>
          <ReactToPrint trigger={() => this.print()}
            content={() => this.state.previewRef}
            pageStyle={''} />
        </ButtonContainer>
        <LiveEdit code={ResumeLayout}
                  scope={scope}
                  noInline={true}
                  passPreviewRefUpward={this.getPreviewRef} />
      </div>
    );
  }
}

export default App;
