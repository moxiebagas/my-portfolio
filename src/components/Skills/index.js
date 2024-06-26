import React from 'react'
import { skills } from '../../data/constants'
import { 
  Container, 
  Wrapper, 
  Title,
  Desc, 
  SkillsContainer, 
  Skill, 
  SkillTitle, 
  SkillList, 
  SkillItem, 
  SkillImage 
} from './SkillsStyle';

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Tech Stack</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 3 years.
        </Desc>
        <SkillsContainer>
          { skills.map((skill) => (
            <Skill>
              <SkillTitle>{ skill.title }</SkillTitle>
              <SkillList>
                { skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={ item.image }/>
                    { item.name }
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills