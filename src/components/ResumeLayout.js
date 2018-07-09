const ResumeLayout = (`
  const LayoutWrapper = styled.div\`
    display: block;
    color: rgb(141, 141, 141);
  \`;

  const HorizontalRule = styled.hr\`
    border: 0;
    border-top 4px solid rgb(85, 140, 171);
  \`;

  const Header = styled.h4\`
    margin-left: 10px;
    font-weight: bold;
  \`;

  const Body = styled.div\`
    display: flex;
    justify-content: flex-start;
    width: 100%;
  \`;

  const SideBar = styled.div\`
    width: 25%;
    padding: 0px 10px 10px;
    word-wrap: break-word;
  \`;

  const SideBarGroup = styled.div\`
    margin-bottom: 15px;
  \`;

  const SkillsGroup = styled.div\`
    display: flex;
    flex-direction: flex-start;
    flex-wrap: wrap;
  \`;

  const Main = styled.div\`
    width: 75%;
    height: 200px;
    background-color: green;
  \`;

  const BoldText = styled.div\`
    font-weight: bold;
    font-size: 10px;
    margin-bottom: 2px;
  \`;

  const TitleColor = {
    color: 'rgb(85, 140, 171)'
  };

  const data = JSON.parse(content);

  render(
    <LayoutWrapper>
      <HorizontalRule />
      <Header style={TitleColor}>{data.name.toUpperCase()}</Header>
      <Body>
        <SideBar>
          <SideBarGroup>
            <BoldText style={TitleColor}>{data.phone}</BoldText>
            <BoldText style={TitleColor}>{data.email}</BoldText>
            <BoldText style={TitleColor}>{data.github}</BoldText>
          </SideBarGroup>
          <SideBarGroup>
            <BoldText>{data.address1}</BoldText>
            <BoldText>{data.city}, {data.state} {data.zip}</BoldText>
          </SideBarGroup>
          <SideBarGroup>
            <BoldText style={TitleColor}>Skills</BoldText>
            <SkillsGroup>
              {data.skills.map((skill, i) => {
                const last = i <= data.skills.length - 2 ? ',' : '';

                return <BoldText style={{ marginRight: '2px' }}>{skill}{last}</BoldText>
              })}
            </SkillsGroup>
          </SideBarGroup>
          <SideBarGroup>
            <BoldText style={TitleColor}>Other</BoldText>
            {data.other.map((oth, i) => {
              return <BoldText style={{ marginBottom: '7px' }}>{oth}</BoldText>
            })}
          </SideBarGroup>
          <SideBarGroup>
            <BoldText style={TitleColor}>References</BoldText>
            {data.references.length === 0 && <BoldText>Available upon request.</BoldText>}
          </SideBarGroup>
        </SideBar>
        <Main />
      </Body>
    </LayoutWrapper>
  );
`);

/* TODO: Move colors to Utils directory. */

export default ResumeLayout;
