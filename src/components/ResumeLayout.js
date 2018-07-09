import React from 'react';

const ResumeLayout = (`
  const LayoutWrapper = styled.div\`
    flex: 1;
    flex-direction: row;
  \`;

  const Header = styled.h1\`
    font-weight: bold;
    color: blue;
  \`;

  const data = JSON.parse(content);

  render(
    <LayoutWrapper>
      <Header>{data.name}</Header>
    </LayoutWrapper>
  );
`);

export default ResumeLayout;
