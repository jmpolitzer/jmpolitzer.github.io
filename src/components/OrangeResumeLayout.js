const OrangeResumeLayout = (`
  const LayoutWrapper = styled.div\`
    display: block;
  \`;

  const Header = styled.div\`
    display: flex;
  \`;

  const HeaderSection = styled.div\`
    flex-direction: column;
    width: 50%;
  \`;

  const Body = styled.div\`
    width: 100%;
  \`;

  const BodySection = styled.div\`
    display: flex;
  \`;

  const data = JSON.parse(content);

  render(
    <LayoutWrapper>
      <Header>
        <HeaderSection>
          Name
        </HeaderSection>
        <HeaderSection>
          Contact Info
        </HeaderSection>
      </Header>
      <Body>
        <BodySection>
          Profile
        </BodySection>
        <BodySection>
          Experience
        </BodySection>
        <BodySection>
          Education
        </BodySection>
        <BodySection>
          Skills
        </BodySection>
        <BodySection>
          Other
        </BodySection>
        <BodySection>
          References
        </BodySection>
      </Body>
    </LayoutWrapper>
  );

`);

export default OrangeResumeLayout;
