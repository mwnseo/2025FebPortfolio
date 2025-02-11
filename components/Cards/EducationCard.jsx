import React from "react";
import styled from "styled-components";

const Document = styled.img`
  display: none; 
  height: 70px;
  width: fit-content;
  background-color: transparent;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Card = styled.div`
  width: 650px;
  border-radius: 16px;
  padding: 20px 24px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(250, 204, 21, 0.2);
  box-shadow: 0 4px 14px rgba(250, 204, 21, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(250, 204, 21, 0.15);
  }

  &:hover ${Document} {
    display: flex;
  }

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
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  background-color: transparent;
  border-radius: 10px;
  margin-top: 4px;
  box-shadow: 0 0 16px 2px rgba(250, 204, 21, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(250, 204, 21, 0.15);
  }

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

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #facc15;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #facc15;
  opacity: 0.8;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #94a3b8;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: #94a3b8;
  margin-bottom: 10px;
  line-height: 1.6;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #facc15;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade: </b>
        {education.grade}
      </Grade>
      <Description>{education.desc}</Description>
    </Card>
  );
};

export default EducationCard;
