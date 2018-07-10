const ResumeLayout = (`
  const LayoutWrapper = styled.div\`
    display: block;
    padding: 25px;
    color: rgb(141, 141, 141);
  \`;

  const HorizontalRule = styled.hr\`
    border: 0;
    border-top 4px solid rgb(85, 140, 171);
  \`;

  const Header = styled.h4\`
    margin-left: 10px;
    font-weight: bold;
    color: rgb(85, 140, 171);
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
    padding: 0px 10px 10px;
  \`;

  const MainSection = styled.div\`
    margin-bottom: 10px;
  \`;

  const ExperienceList = styled.ul\`
    margin-top: 0px;
    padding-left: 17px;
  \`;

  const BoldText = styled.div\`
    font-weight: 600;
    font-size: 10px;
    margin-bottom: \${props => props.other ? '7px' : '2px'};
    margin-right: \${props => props.skill && '2px'};
    color: \${props => props.title && 'rgb(113, 159, 185)'};
  \`;

  const LongText = styled.div\`
    font-weight: 300;
    font-size: 10px;
    line-height: 13px;
  \`;

  const data = JSON.parse(content);

  render(
    <LayoutWrapper>
      <HorizontalRule />
      <Header>{data.name.toUpperCase()}</Header>
      <Body>
        <SideBar>
          <SideBarGroup>
            <BoldText title='true'>{data.phone}</BoldText>
            <BoldText title='true'>{data.email}</BoldText>
            <BoldText title='true'>{data.github}</BoldText>
          </SideBarGroup>
          <SideBarGroup>
            <BoldText>{data.address1}</BoldText>
            <BoldText>{data.city}, {data.state} {data.zip}</BoldText>
          </SideBarGroup>
          <SideBarGroup>
            <BoldText title='true'>Skills</BoldText>
            <SkillsGroup>
              {data.skills.map((skill, i) => {
                const last = i <= data.skills.length - 2 ? ',' : '';

                return <BoldText skill='true' key={i}>{skill}{last}</BoldText>
              })}
            </SkillsGroup>
          </SideBarGroup>
          <SideBarGroup>
            <BoldText title='true'>Other</BoldText>
            {data.other.map((oth, j) => {
              return <BoldText other='true' key={j}>{oth}</BoldText>
            })}
          </SideBarGroup>
          <SideBarGroup>
            <BoldText title='true'>References</BoldText>
            {data.references.length === 0 && <BoldText>Available upon request.</BoldText>}
          </SideBarGroup>
        </SideBar>
        <Main>
          <MainSection>
            <BoldText title='true'>Profile</BoldText>
            <LongText>{data.profile}</LongText>
          </MainSection>
          <MainSection>
            <BoldText title='true'>Experience</BoldText>
            {data.experience.map((exp, k) => {
              return <div key={k}>
                      <BoldText>{exp.title}, {exp.company}; {exp.location} &ndash; {exp.duration}</BoldText>
                      <ExperienceList>
                        {exp.highlights.map((hl, l) => {
                          return <li key={l}><LongText>{hl}</LongText></li>;
                        })}
                      </ExperienceList>
                    </div>;
                  })}
          </MainSection>
          <MainSection>
            <BoldText title='true'>Education</BoldText>
            {data.education.map((edu, m) => {
              const degree = edu.degree ? edu.degree + ',' : '';

              return <BoldText key={m}>{edu.school} &ndash; {degree} {edu.year}</BoldText>;
            })}
          </MainSection>
        </Main>
      </Body>
    </LayoutWrapper>
  );
`);

/* TODO: Move colors to Utils directory. */

export default ResumeLayout;
