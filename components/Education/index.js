import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  background: rgb(23, 31, 39) !important;
`;

const StarBackground = styled.div`
  position: absolute;
  width: 40%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(250, 204, 21, 0.8);
    box-shadow: ${Array(15).fill().map(() => {
      const x = Math.floor(Math.random() * 400);
      const y = Math.floor(Math.random() * 800);
      return `${x}px ${y}px rgba(250, 204, 21, 0.8)`;
    }).join(',')};
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
  background: radial-gradient(
    circle at 70% 50%,
    rgba(250, 204, 21, 0.08) 0%,
    rgba(250, 204, 21, 0.05) 25%,
    rgba(250, 204, 21, 0.01) 50%,
    transparent 70%
  );
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
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #facc15;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #94a3b8;
  @media (max-width: 768px) {
    margin-top: 12px;
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

const CustomTimeline = styled(Timeline)`
  .MuiTimelineItem-root {
    flex-direction: row !important;
  }
  .MuiTimelineContent-root {
    padding-right: 0 !important;
    padding-left: 16px !important;
  }
  .MuiTimelineSeparator-root {
    margin-left: 0 !important;
  }
`;

const Education = () => {
  return (
    <Container id="education">
      <StarBackground />
      <GradientOverlay />
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>
        <TimelineSection>
          <CustomTimeline>
            {education.map((education, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: "#facc15",
                      borderColor: "#facc15",
                      boxShadow: "0 0 10px rgba(250, 204, 21, 0.4)",
                    }}
                  />
                  {index !== education.length - 1 && (
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(180deg, #facc15 0%, rgba(250, 204, 21, 0.2) 100%)",
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </CustomTimeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
