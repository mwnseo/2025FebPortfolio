import React from "react";
import styled from "styled-components";
import { FaPhone, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(23, 31, 39);
  padding: 50px 0;
  position: relative;
  z-index: 2;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: #facc15;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #94a3b8;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #94a3b8;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  z-index: 10;
  background: rgba(30, 41, 59, 0.8);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  }

  svg {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Title>Contact</Title>
      <Desc>I am always checking my email and socials! Feel free to reach out to me anytime!</Desc>
      <ContactList>
        <ContactLink href="tel:+12259555576">
          <FaPhone />
          +1 (225) 955-5576
        </ContactLink>
        <ContactLink href="https://github.com/mwnseo" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          GitHub Profile
        </ContactLink>
        <ContactLink href="mailto:leeminseo0110@gmail.com?subject=Hello%20Minseo">
          <FaEnvelope />
          leeminseo0110@gmail.com
        </ContactLink>
        <ContactLink href="https://www.linkedin.com/in/minseo-lee-64181b256/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          LinkedIn Profile
        </ContactLink>
      </ContactList>
    </Container>
  );
};

export default Contact;
