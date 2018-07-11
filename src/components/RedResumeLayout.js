const RedResumeLayout = (`
  const LayoutWrapper = styled.div\`
    display: block;
    padding: 25px;
    // color: \${(props) => props.printMode ? colors.lightText : colors.text};
  \`;

  const Header = styled.div\`
    display: flex;
    padding: 0px 10px;
    margin-bottom: 150px;
  \`;

  const HeaderSection = styled.div\`
    flex-direction: column;
    width: 50%;
  \`;

  const Name = styled.div\`
    width: 25%;
    font-size: 64px;
    font-weight: bold;
    color: \${colors.redHeader};
  \`;

  const Contact = styled.div\`
    color: \${colors.darkText};
    margin-bottom: 20px;
  \`;

  const Text = styled.div\`
    font-size: 13px;
  \`

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
      <Header>
        <HeaderSection>
          <Name printMode={printMode ? 1 : 0}>{data.name}</Name>
        </HeaderSection>
        <HeaderSection>
          <Contact>
            <Text>{data.address1}</Text>
            <Text>{data.city}, {data.state} {data.zip}</Text>
          </Contact>
          <Contact>
            <Text>M&emsp;&emsp;&emsp;{data.phone}</Text>
            <Text>E&emsp;&emsp;&emsp;{data.email}</Text>
          </Contact>
          <Contact>
            <Text>{data.github}</Text>
          </Contact>
        </HeaderSection>
      </Header>
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
