import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: -120px;
  padding: 60px 0px 100px 0px;
  background: rgb(23, 31, 39) !important;
  overflow: hidden;

  @media (max-width: 960px) {
    padding: 40px 0px;
    margin-top: 0px;
  }
`;

const StarryBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    background: rgba(250, 204, 21, 0.8);
    box-shadow: ${Array(15).fill().map(() => {
      const x = Math.floor(Math.random() * 1000);
      const y = Math.floor(Math.random() * 500);
      return `${x}px ${y}px rgba(250, 204, 21, 0.8)`;
    }).join(',')};
    filter: drop-shadow(0 0 4px rgba(250, 204, 21, 0.4));
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  padding: 40px 0;
  gap: 24px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: #facc15;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #94a3b8;
  line-height: 1.5;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const StyledTimeline = styled(Timeline)`
  .MuiTimelineItem-root:before {
    flex: 0;
    padding: 0;
  }
`;

const index = () => {
  return (
    <Container id="experience">
      <StarryBackground />
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My experience as a software engineer in different environments.
        </Desc>
        <TimelineSection>
          <StyledTimeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: "#facc15",
                      borderColor: "#facc15",
                      boxShadow: "0 0 10px rgba(250, 204, 21, 0.4)",
                    }}
                  />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(180deg, #facc15 0%, rgba(250, 204, 21, 0.2) 100%)",
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </StyledTimeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default index;
