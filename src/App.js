import React, { Component } from 'react';
import styled from 'styled-components';
import ReactToPrint from 'react-to-print';
import { CSSTransitionGroup } from 'react-transition-group';
import ReactTooltip from 'react-tooltip';
import IosPrinterOutline from 'react-icons/lib/io/ios-printer-outline';
import IoIosPaperOutline from 'react-icons/lib/io/ios-paper-outline';
import Analytics from './utils/analytics';
import { cerulean, lightCerulean, text, lightText,
         darkText, redHeader, print, logoOrange,
         darkerText, lighterText } from './utils/colors';
import IntroText from './components/IntroText';
import LiveEdit from './components/LiveEdit';
import Footer from './components/Footer';
import BlueResumeLayout from './components/BlueResumeLayout';
import RedResumeLayout from './components/RedResumeLayout';
import OrangeResumeLayout from './components/OrangeResumeLayout';
import ResumeContent from './data/resume.json';

import headshot from './headshot.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { resumeVisible: true,
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

  componentDidMount() {
    Analytics.pageview(window.location.pathname);
  }

  getButtons(isMobile) {
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
      margin: 0px;

      &:hover {
        cursor: pointer;
      }
    `;

    return <ButtonContainer>
      {Object.keys(buttonTypes).map((b, i) => {
        return <div key={i}>
                  <Button type={buttonTypes[b]}
                          data-tip
                          data-for={b}
                          onClick={() => this.setResumeLayout(b)}>
                    <IoIosPaperOutline />
                  </Button>
                  <ReactTooltip disable={isMobile} id={b}>{b} layout</ReactTooltip>
                </div>})}
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
    return <div>
              <Button type={{ color: print }}
                      data-tip
                      data-for='print'
                      onMouseEnter={() => this.setPrintMode(true)}
                      onMouseLeave={() => this.setPrintMode(false)}>
                <IosPrinterOutline />
              </Button>
              <ReactTooltip id='print'>print</ReactTooltip>
            </div>
  }

  render() {
    const content = JSON.stringify(ResumeContent);
    const colors = { cerulean, lightCerulean, text, darkText,
                     lightText, redHeader, logoOrange, darkerText,
                     lighterText };
    const printMode = this.state.printMode;
    const scope = { styled, colors, content, printMode };
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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
            {this.getButtons(isMobile)}
            <LiveEdit code={this.getResumeLayout()}
              scope={scope}
              noInline={true}
              passPreviewRefUpward={this.getPreviewRef} />
            <Footer isMobile={isMobile} />
          </div>}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
