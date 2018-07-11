const RedResumeLayout = (`
  const LayoutWrapper = styled.div\`
    display: block;
    padding: 25px;
    color: \${(props) => props.printMode ? colors.lightText : colors.text};
  \`;

  const Header = styled.h1\`
    margin-left: 10px;
    font-weight: bold;
    color: \${colors.redHeader};
  \`;

  const Body = styled.div\`
    display: flex;
    justify-content: flex-start;
    width: 100%;
  \`;

  const SideBar = styled.div\`
    width: 25%;
    padding: 0px 10px 10px;
  \`;

  const Main = styled.div\`
    width: 75%;
    padding: 0px 10px 10px;
  \`;

  const data = JSON.parse(content);

  render(
    <LayoutWrapper printMode={printMode ? 1 : 0}>
      <Header printMode={printMode ? 1 : 0}>{data.name.toUpperCase()}</Header>
      <Body>
        <SideBar>
          <div>Red Layout SideBar</div>
        </SideBar>
        <Main>
          <div>Red Layout Main</div>
        </Main>
      </Body>
    </LayoutWrapper>
  );

`);

export default RedResumeLayout;
