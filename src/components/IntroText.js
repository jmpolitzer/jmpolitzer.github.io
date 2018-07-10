import React from 'react';
import Typist from 'react-typist';

const IntroText = () => (
  <h2>
    <Typist startDelay={2000} averageTypingDelay={10}>
      Hi, I'm Jay.&nbsp;
      <Typist.Delay ms={1500} />
      I'm so glad you stopped by.&nbsp;
    </Typist>
  </h2>
);

export default IntroText;
