import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 650px;
  border-radius: 16px;
  padding: 20px 24px;
  justify-content: space-between;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: rgb(30, 41, 59);
  border: 1px solid rgba(250, 204, 21, 0.2);
  box-shadow: 0 4px 14px rgba(250, 204, 21, 0.1);

  @media only screen and (max-width: 768px) {
    padding: 16px;
    gap: 8px;
    width: 300px;
  }
`;


const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  background-color: transparent;
  border-radius: 10px;
  margin-top: 4px;
  filter: brightness(0.8);

  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Role = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #facc15;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Company = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #facc15;
  opacity: 0.8;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #94a3b8;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: #94a3b8;
  margin-bottom: 10px;
  line-height: 1.6;
  white-space: pre-line;
  padding-left: 16px;
  text-indent: -16px;
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #facc15;
  padding: 6px 14px;
  border-radius: 20px;
  background: rgba(250, 204, 21, 0.1);
  border: 1px solid rgba(250, 204, 21, 0.3);
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 4px 10px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} alt={experience.company} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>{experience?.desc}</Description>
      {experience?.skills && (
        <Skills>
          <b style={{ color: "#facc15" }}>Skills:</b>
          <ItemWrapper>
            {experience.skills.map((skill, index) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </ItemWrapper>
        </Skills>
      )}
    </Card>
  );
};

export default ExperienceCard;
