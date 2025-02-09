import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg) translate(-50%, -50%);
  }
  to {
    transform: rotate(360deg) translate(-50%, -50%);
  }
`;

export const sparkle = keyframes`
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1) rotate(180deg); opacity: 0.8; }
  100% { transform: scale(0) rotate(360deg); opacity: 0; }
`;

export const SparklesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

export const Sparkle = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  animation: ${sparkle} ${(props) => props.duration || "2s"} infinite
    ease-in-out;
  animation-delay: ${(props) => props.delay || "0s"};
  left: ${(props) => props.left || "50%"};
  top: ${(props) => props.top || "50%"};
`;

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  background: rgb(23, 31, 39) !important;
`;

export const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      rgba(56, 189, 248, 0.1) 0%,
      rgba(250, 204, 21, 0.1) 50%,
      rgba(56, 189, 248, 0.1) 100%
    );
    animation: ${rotate} 20s linear infinite;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  background: linear-gradient(135deg, rgb(8, 13, 24), #1e293b);
  color: white;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);

  @media (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);
    height: auto;
    padding: 6rem 2rem;
  }
`;

export const BackgroundShapes = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    filter: blur(80px);
    animation: ${float} 10s infinite ease-in-out;
  }

  &::before {
    background: rgba(56, 189, 248, 0.15);
    top: -100px;
    right: -100px;
    animation-delay: -5s;
  }

  &::after {
    background: rgba(250, 204, 21, 0.15);
    bottom: -100px;
    left: -100px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 2rem 4rem;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 1rem;
    gap: 2rem;
  }
`;

export const AnimatedHeading = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff 30%, #facc15 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(250, 204, 21, 0.2);

  i {
    display: inline-block;
    color: #facc15;
    font-style: normal;
    -webkit-text-fill-color: #facc15;
    animation: ${float} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-in-out;
  padding-left: 1rem;
  margin-right: 2rem;

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #fff, #facc15);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      padding: 0 1rem;
      margin-right: 0;
      text-align: center;
    }
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #94a3b8;
    margin-bottom: 2rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  @media (max-width: 768px) {
    padding-left: 0;
    margin-right: 0;
    text-align: center;
  }
`;

export const HighlightText = styled.span`
  color: #facc15;
  font-weight: 700;
`;

export const CTAButton = styled.button`
  padding: 1.2rem 2.4rem;
  background: linear-gradient(45deg, #facc15, #eab308);
  color: #1e293b;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 15px rgba(250, 204, 21, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(250, 204, 21, 0.6);
  }
`;

export const AvatarContainer = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgb(248, 248, 56), rgb(243, 211, 56));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1s ease-in-out, ${float} 6s infinite ease-in-out;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 2rem 0;
  }
`;

export const Avatar = styled.img`
  width: 95%;
  height: 95%; 
  border-radius: 50%; 
  z-index: 1;
  object-fit: cover; 
`;

export const InfoCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: -100px;
  padding: 0 2rem 4rem;
  width: 100%;
  max-width: 1200px;
  z-index: 2;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: -50px;
  }
`;

export const Card = styled.div`
  flex: 1;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 14px rgba(250, 204, 21, 0.1);
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #facc15;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #94a3b8;
    line-height: 1.6;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
      background: linear-gradient(45deg, #facc15, #eab308);
       color: #1e293b;
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;
