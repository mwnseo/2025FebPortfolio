import React from "react";
import styled from "styled-components";
import { skillsData } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin-top: -80px;
  align-items: center;
  padding: 60px 0px 100px 0px;
  background: rgb(23, 31, 39) !important;

  @media (max-width: 960px) {
    padding: 40px 0px;
    margin-top: 0px;
  }
`;

const AnimatedBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: radial-gradient(
      circle,
      rgba(250, 204, 21, 0.1) 0%,
      transparent 40%
    );
    animation: rotate 15s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at top right,
    rgba(144, 130, 74, 0.05) 0%,
    transparent 50%
  );
  top: 0;
  left: 0;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  background: linear-gradient(45deg, #fff, #facc15);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #94a3b8;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillSection = styled.div`
  width: 100%;
  max-width: 500px;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(250, 204, 21, 0.4);
  padding: 24px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  color: #facc15;
  margin-bottom: 24px;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
  padding: 0 100px;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 0 10px;
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkillNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CircleIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: #facc15;
  border-radius: 50%;
`;

const SkillName = styled.span`
  color: white;
  font-size: 16px;
`;

const SkillLevel = styled.span`
  color: #94a3b8;
  font-size: 14px;
  margin-top: 4px;
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 24px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <GradientOverlay />
      <AnimatedBackground />
      <SkillsContainer>
        <Title>Skills</Title>
        <Desc>
          I have a strong foundation in web app development and experience
        </Desc>
        {Object.entries(skillsData).map(([key, category]) => (
          <SkillSection key={key}>
            <SectionTitle>{category.title}</SectionTitle>
            <SkillsGrid>
              {category.skills.map((skill) => (
                <SkillItem key={skill.name}>
                  <SkillNameWrapper>
                    <CircleIcon />
                    <SkillName>{skill.name}</SkillName>
                  </SkillNameWrapper>
                  <SkillLevel>{skill.level}</SkillLevel>
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillSection>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
