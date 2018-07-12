const RedResumeLayout = (`
  const LayoutWrapper = styled.div\`
    display: block;
    padding: 35px;
  \`;

  const Header = styled.div\`
    display: flex;
    padding: 0px 10px;
    margin-bottom: 100px;
  \`;

  const HeaderSection = styled.div\`
    display: \${(props) => props.contacts && 'flex'};
    justify-content: \${(props) => props.contacts && 'space-around'};
    flex-direction: column;
    width: \${(props) => props.name ? '65%' : '35%'};
  \`;

  const Name = styled.div\`
    width: 25%;
    font-size: 64px;
    font-weight: bold;
    color: \${colors.redHeader};
  \`;

  const Body = styled.div\`
    width: 100%;
  \`;

  const BodySection = styled.div\`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 25px;
  \`;

  const SideBar = styled.div\`
    width: 25%;
    padding: 0px 10px 10px;
  \`;

  const Main = styled.div\`
    width: 75%;
    display: \${(props) => props.skills && 'flex'};
    justify-content: \${(props) => props.skills && 'flex-start'};
    flex-wrap: \${(props) => props.skills && 'wrap'};
  \`;

  const ExperienceItem = styled.div\`
    margin-bottom: \${(props) => props.last && '20px'};
  \`

  const Text = styled.div\`
    color: \${colors.darkText};
    font-size: 13px;
  \`

  const LongText = styled.div\`
    color: black;
    font-size: 13px;
    line-height: 18px;
    margin-bottom: \${(props) => props.highlight && '20px'};
  \`

  const data = JSON.parse(content);

  render(
    <LayoutWrapper>
      <Header>
        <HeaderSection name='true'>
          <Name>{data.name}</Name>
        </HeaderSection>
        <HeaderSection contacts='true'>
          <div>
            <Text>{data.city}, {data.state}</Text>
          </div>
          <div>
            <Text>{data.email}</Text>
          </div>
          <div>
            <Text>{data.github}</Text>
          </div>
        </HeaderSection>
      </Header>
      <Body>
        <BodySection>
          <SideBar>
            <Text>Profile</Text>
          </SideBar>
          <Main>
            <LongText>{data.profile}</LongText>
          </Main>
        </BodySection>
        <BodySection>
          <SideBar>
            <Text>Experience</Text>
          </SideBar>
          <Main>
            {data.experience.map((exp, k) => {
              return <ExperienceItem key={k} last={k <= data.experience.length - 2}>
                      <Text>{exp.title}, {exp.company}; {exp.location} &ndash; {exp.duration}</Text>
                      {exp.highlights.map((hl, l) => {
                        return <LongText highlight={l <= exp.highlights.length - 2}
                                         key={l}>{hl}</LongText>;
                      })}
                    </ExperienceItem>;
                  })}
          </Main>
        </BodySection>
        <BodySection>
          <SideBar>
            <Text>Education</Text>
          </SideBar>
          <Main>
            {data.education.map((edu, m) => {
              const degree = edu.degree ? edu.degree + ',' : '';

              return <Text key={m}>{edu.school} &ndash; {degree} {edu.year}</Text>;
            })}
          </Main>
        </BodySection>
        <BodySection>
          <SideBar>
            <Text>Skills</Text>
          </SideBar>
          <Main skills='true'>
            {data.skills.map((skill, i) => {
              const last = i <= data.skills.length - 2 ? ',' : '';

              return <LongText key={i}>{skill}{last}&emsp;</LongText>
            })}
          </Main>
        </BodySection>
        <BodySection>
          <SideBar>
            <Text>Other</Text>
          </SideBar>
          <Main>
            {data.other.map((oth, j) => {
              return <Text key={j}>{oth}</Text>
            })}
          </Main>
        </BodySection>
        <BodySection>
          <SideBar>
            <Text>References</Text>
          </SideBar>
          <Main>
            {data.references.length === 0 && <LongText>Available upon request.</LongText>}
          </Main>
        </BodySection>
      </Body>
    </LayoutWrapper>
  );

`);

export default RedResumeLayout;
