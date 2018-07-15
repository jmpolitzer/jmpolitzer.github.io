import React from 'react';
// import Typist from 'react-typist';
import styled from 'styled-components';

const BigText = styled.div`
  display: inline-block;
  font-size: 24px;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

const SmallText = styled.div`
  display: inline-block;
  font-size: 13px;

  @media (max-width: 500px) {
    padding: 10px 50px 0px;
  }
`

const IntroText = ({ showResume }) => (
  <div>
    <BigText >Hi, I'm Jay.&nbsp;</BigText>
    <br />
    <BigText>I'm so glad you stopped by.</BigText>
    <br />
    <br />
    <SmallText>Below is my r&eacute;sum&eacute; and the React code that renders it.</SmallText>
    <br />
    <SmallText key={11}>Please take a gander at all three flavors.</SmallText>
  </div>
  // <Typist startDelay={1500} averageTypingDelay={10} onTypingDone={showResume}>
  //   <BigText key={1}>Hi, I'm Jay.&nbsp;</BigText>
  //   <Typist.Delay key={2} ms={1500} />
  //   <br key={3} />
  //   <BigText key={4}>I'm so glad you stopped by.</BigText>
  //   <Typist.Delay key={5} ms={1500} />
  //   <br key={6} />
  //   <br key={7} />
  //   <SmallText key={8}>In a few moments, my r&eacute;sum&eacute; and the React code that renders it will appear.</SmallText>
  //   <Typist.Delay key={9} ms={1000} />
  //   <br key={10} />
  //   <SmallText key={11}>Take a gander at all three flavors and print to your heart's desire.</SmallText>
  // </Typist>
);

export default IntroText;
