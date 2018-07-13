import React, { Component } from 'react';
import styled from 'styled-components';
import ReactToPrint from 'react-to-print';
import { CSSTransitionGroup } from 'react-transition-group';
import IosPrinterOutline from 'react-icons/lib/io/ios-printer-outline';
import IoIosPaperOutline from 'react-icons/lib/io/ios-paper-outline';
import { cerulean, lightCerulean, text, lightText,
         darkText, redHeader, print, logoOrange,
         darkerText, lighterText } from './utils/colors';
import IntroText from './components/IntroText';
import LiveEdit from './components/LiveEdit';
import BlueResumeLayout from './components/BlueResumeLayout';
import RedResumeLayout from './components/RedResumeLayout';
import OrangeResumeLayout from './components/OrangeResumeLayout';
import ResumeContent from './data/resume.json';

import headshot from './headshot.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { resumeVisible: false,
                   previewRef: null,
                   printMode: false,
                   layout: 'blue' };
    this.getButtons = this.getButtons.bind(this);
    this.showResume = this.showResume.bind(this);
    this.getPreviewRef = this.getPreviewRef.bind(this);
    this.getResumeLayout = this.getResumeLayout.bind(this);
    this.setResumeLayout = this.setResumeLayout.bind(this);
    this.setPrintMode = this.setPrintMode.bind(this);
    this.print = this.print.bind(this);
  }

  getButtons() {
    const buttonTypes = {
      blue: { color: cerulean },
      red: { color: redHeader },
      orange: { color: logoOrange }
    };

    const ButtonContainer = styled.div`
      display: flex;
      justify-content: flex-end;
    `;

    const Button = styled.button`
      background: ${(props) => props.type.color};
      border: 0;
      color: white;
      padding: 10px;
      font-size: 22px;

      &:hover {
        cursor: pointer;
      }
    `;

    return <ButtonContainer>
      {Object.keys(buttonTypes).map((b, i) => {
        return <Button key={i}
                       type={buttonTypes[b]}
                       onClick={() => this.setResumeLayout(b)}>
                 <IoIosPaperOutline />
               </Button>})}
      <ReactToPrint trigger={() => this.print(Button)}
                    content={() => this.state.previewRef}
                    pageStyle={''} />
    </ButtonContainer>
  }

  showResume() {
    this.setState({ resumeVisible: true });
  }

  getPreviewRef(previewRef) {
    this.setState({ previewRef });
  }

  getResumeLayout() {
    const layouts = {
      blue: BlueResumeLayout,
      red: RedResumeLayout,
      orange: OrangeResumeLayout
    };

    return layouts[this.state.layout];
  }

  setResumeLayout(layout) {
    this.setState({ layout });
  };

  setPrintMode(mode) {
    this.setState({ printMode: mode });
  }

  print(Button) {
    return <Button type={{ color: print }}
                   onMouseEnter={() => this.setPrintMode(true)}
                   onMouseLeave={() => this.setPrintMode(false)}>
             <IosPrinterOutline />
           </Button>
  }

  render() {
    const content = JSON.stringify(ResumeContent);
    const colors = { cerulean, lightCerulean, text, darkText,
                     lightText, redHeader, logoOrange, darkerText,
                     lighterText };
    const printMode = this.state.printMode;
    const scope = { styled, colors, content, printMode };


    return (
      <div>
        <header className='Header'>
          <img src={headshot} className='App-headshot' alt='headshot' />
          <IntroText showResume={this.showResume} />
        </header>
        <CSSTransitionGroup transitionName='resume'
                            transitionEnterTimeout={700}
                            transitionLeaveTimeout={300}>
          {this.state.resumeVisible && <div>
            {this.getButtons()}
            <LiveEdit code={this.getResumeLayout()}
              scope={scope}
              noInline={true}
              passPreviewRefUpward={this.getPreviewRef} />
          </div>}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
