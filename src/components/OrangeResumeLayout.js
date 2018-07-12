const OrangeResumeLayout = (`
  const LayoutWrapper = styled.div\`
    display: flex;
    padding: 100px 35px;
  \`;

  const SideBar = styled.div\`
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    width: 15%;
  \`;

  const LogoBox = styled.div\`
    height: 25px;
    width: 25px;
    box-shadow: inset 0 0 0 1000px \${(props) => props.color};
  \`;

  const Main = styled.div\`
    width: 85%;
  \`;

  const HeaderSection = styled.div\`
    display: flex;
    margin-bottom: \${(props) => props.name ? '20px' : '50px'};
  \`;

  const Contact = styled.div\`
    margin-right: \${(props) => !props.big && '20px'};
    color: \${(props) => props.color ? props.color : 'black'};
    font-size: \${(props) => props.big ? '24px' : '11px'};
    letter-spacing: \${(props) => props.big && '0.5px'};
  \`;

  const Body = styled.div\`
    width: 100%;
  \`;

  const BodySection = styled.div\`
    margin-bottom: 20px;
  \`;

  const Title = styled.div\`
    color: \${colors.darkerText};
    font-size: 20px;
  \`;

  const LongText = styled.div\`
    color: black;
    font-size: 13px;
    line-height: 20px;
  \`

  const data = JSON.parse(content);

  render(
    <LayoutWrapper>
      <SideBar>
        <LogoBox color={colors.logoOrange} />
        <LogoBox color={colors.redHeader} />
        <LogoBox color={colors.cerulean} />
      </SideBar>
      <Main>
        <HeaderSection name='true'>
          <Contact color={colors.darkerText} big='true'>{data.name}</Contact>
        </HeaderSection>
        <HeaderSection>
          <Contact>{data.phone}</Contact>
          <Contact>{data.email}</Contact>
          <Contact>{data.address1} {data.state}, {data.zip}</Contact>
          <Contact>{data.github}</Contact>
        </HeaderSection>
        <Body>
          <BodySection>
            <Title>Profile</Title>
            <LongText>{data.profile}</LongText>
          </BodySection>
          <BodySection>
            <Title>Experience</Title>
          </BodySection>
          <BodySection>
            <Title>Education</Title>
          </BodySection>
          <BodySection>
            <Title>Skills</Title>
          </BodySection>
          <BodySection>
            <Title>Other</Title>
          </BodySection>
          <BodySection>
            <Title>References</Title>
          </BodySection>
        </Body>
      </Main>
    </LayoutWrapper>
  );

`);

export default OrangeResumeLayout;
