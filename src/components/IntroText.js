import React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';

const BigText = styled.div`
  display: inline-block;
  font-size: 24px;
`;

const SmallText = styled.div`
  display: inline-block;
  font-size: 13px;
`

const IntroText = ({ showResume }) => (
  <Typist startDelay={1500} averageTypingDelay={10} onTypingDone={showResume}>
    <BigText>Hi, I'm Jay.&nbsp;</BigText>
    <Typist.Delay ms={1500} />
    <br key={1} />
    <BigText>I'm so glad you stopped by.</BigText>
    <Typist.Delay ms={1500} />
    <br key={2} />
    <br key={3} />
    <SmallText>In a few moments, my r&eacute;sum&eacute; and the React code that renders it will appear.</SmallText>
    <Typist.Delay ms={1000} />
    <br key={4} />
    <SmallText>Take a gander at all three flavors and print to your heart's desire.</SmallText>
  </Typist>
);

export default IntroText;
