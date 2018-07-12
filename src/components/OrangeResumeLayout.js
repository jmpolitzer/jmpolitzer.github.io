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
    margin-bottom: \${(props) => props.name ? '20px' : '75px'};
  \`;

  const Contact = styled.div\`
    margin-right: \${(props) => !props.big && '13px'};
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

  const ExperienceItem = styled.div\`
    margin-bottom: 20px;
  \`;

  const Skills = styled.div\`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  \`;

  const Title = styled.div\`
    color: \${colors.darkerText};
    font-size: 20px;
    margin-bottom: 15px;
  \`;

  const Subtitle = styled.div\`
    color: \${colors.darkText};
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 5px;
  \`;

  const LongText = styled.div\`
    color: black;
    font-size: 13px;
    line-height: 20px;
    margin-bottom: \${(props) => props.highlight && '11px'};
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
          <Contact>{data.city}, {data.state}</Contact>
          <Contact>{data.github}</Contact>
        </HeaderSection>
        <Body>
          <BodySection>
            <Title>Profile</Title>
            <LongText>{data.profile}</LongText>
          </BodySection>
          <BodySection>
            <Title>Experience</Title>
            {data.experience.map((exp, i) => {
              return <ExperienceItem key={i}>
                      <Subtitle>{exp.title}, {exp.company}; {exp.location} &ndash; {exp.duration}</Subtitle>
                         {exp.highlights.map((hl, j) => {
                           return <LongText key={j} highlight='true'>{hl}</LongText>;
                         })}
                      </ExperienceItem>})}
          </BodySection>
          <BodySection skills='true'>
            <Title>Education</Title>
            {data.education.map((edu, k) => {
              const degree = edu.degree ? edu.degree + ',' : '';

              return <LongText key={k}>{edu.school} &ndash; {degree} {edu.year}</LongText>;
            })}
          </BodySection>
          <BodySection>
            <Title>Skills</Title>
            <Skills>
              {data.skills.map((skill, l) => {
                const last = l <= data.skills.length - 2 ? ',' : '';

                return <LongText key={l}>{skill}{last}&emsp;</LongText>
              })}
            </Skills>
          </BodySection>
          <BodySection>
            <Title>Other</Title>
            {data.other.map((oth, m) => {
              return <LongText key={m}>{oth}</LongText>;
            })}
          </BodySection>
          <BodySection>
            <Title>References</Title>
            {data.references.length === 0 && <LongText>Available upon request.</LongText>}
          </BodySection>
        </Body>
      </Main>
    </LayoutWrapper>
  );

`);

export default OrangeResumeLayout;
