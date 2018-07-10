import React from 'react';
import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { foreground, red, lightGrey } from '../utils/colors';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${polished.rem(100)};
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled(LiveEditor)`
  background: ${lightGrey};
  font-family: 'Source Code Pro', monospace;
  font-size: ${polished.rem(14)};
  height: ${polished.rem(500)};
  overflow: scroll;
  ${column}
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  background: white;
  color: black;
  height: ${polished.rem(500)};
  overflow: ${props => props.printmode ? 'visible' : 'scroll'};
  ${column}
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
`;

class LiveEdit extends React.Component {
  constructor() {
    super();

    this.previewRef = React.createRef();
  }

  componentDidMount() {
    this.props.passPreviewRefUpward(this.previewRef.current);
  }

  render() {
    const { code, scope, noInline } = this.props;

    return (
      <StyledProvider
        code={code}
        scope={scope}
        noInline={noInline}
        mountStylesheet={true}>
        <LiveWrapper>
          <StyledEditor />
          <StyledPreview printmode={scope.printMode ? 1 : 0} ref={this.previewRef} />
        </LiveWrapper>
        <StyledError />
      </StyledProvider>
    );
  }
};

export default LiveEdit;
