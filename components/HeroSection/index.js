import React from "react";
import {
  SparklesContainer,
  Sparkle,
  HeroContainer,
  AnimatedBackground,
  HeroSection,
  BackgroundShapes,
  ContentWrapper,
  LeftSection,
  HighlightText,
  AvatarContainer,
  Avatar,
  InfoCards,
  Card,
  ResumeButton,
  AnimatedHeading,
} from "./HeroStyle";
import { Bio } from "../../data/constants";

const Sparkles = () => {
  const sparkles = Array(20)
    .fill()
    .map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 3}s`,
      delay: `${Math.random() * 2}s`,
    }));

  return (
    <SparklesContainer>
      {sparkles.map((props, i) => (
        <Sparkle key={i} {...props} />
      ))}
    </SparklesContainer>
  );
};

const Hero = () => {
  return (
    <HeroContainer>
      <HeroSection>
        <AnimatedBackground />
        <Sparkles />
        <BackgroundShapes />
        <ContentWrapper>
          <LeftSection>
            <AnimatedHeading>
              <h1>
                Hello, I am <i>{Bio.name}</i>
              </h1>
            </AnimatedHeading>
            <p>
            A{" "}
            <HighlightText>self-starter</HighlightText>{" "}
            Software Engineer driven by{" "}
              <HighlightText>ambition</HighlightText> and{" "}
              <HighlightText>innovation</HighlightText>
            </p>
            <ResumeButton href={Bio.resume} target="display">
              View Resume
            </ResumeButton>
          </LeftSection>
          <AvatarContainer>
            <Avatar src="hero.jpg" alt="Avatar" />
          </AvatarContainer>
        </ContentWrapper>
      </HeroSection>
      <InfoCards>
        <Card>
          <h3>Passion</h3>
          <p>
          I am passionate about learning and seeking challenging
          opportunities to expand my skills.
          </p>
        </Card>
        <Card>
          <h3>Development</h3>
          <p>
            Building software applications and services with cutting-edge
            technologies and best practices.
          </p>
        </Card>
        <Card>
          <h3>Problem Solving</h3>
          <p>
            I enjoy solving problems and finding creative solutions to complex
            challenges.
          </p>
        </Card>
      </InfoCards>
    </HeroContainer>
  );
};

export default Hero;
