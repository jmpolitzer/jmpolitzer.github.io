const OrangeResumeLayout = (`
  const LayoutWrapper = styled.div\`
    display: flex;
    padding: 100px 0px;
  \`;

  const SideBar = styled.div\`
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    width: 25%;
  \`;

  const LogoBox = styled.div\`
    height: 25px;
    width: 25px;
    background-color: \${(props) => props.color};
  \`;

  const Main = styled.div\`
    width: 75%;
  \`;

  const HeaderSection = styled.div\`
    display: flex;
    margin-bottom: \${(props) => props.name ? '20px' : '50px'};
  \`;

  const Contact = styled.div\`
    width: \${(props) => props.big ? '100%' : '25%'};
    color: \${(props) => props.color ? props.color : 'black'};
    font-size: \${(props) => props.big ? '24px' : '13px'};
    letter-spacing: \${(props) => props.big && '0.5px'};
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
          <Contact>Address</Contact>
          <Contact>Phone</Contact>
          <Contact>Email</Contact>
          <Contact>Github</Contact>
        </HeaderSection>
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
      </Main>
    </LayoutWrapper>
  );

`);

export default OrangeResumeLayout;
