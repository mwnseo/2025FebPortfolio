import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    rgb(23, 31, 39) 0%,
    rgba(30, 41, 59, 0.8) 50%,
    rgb(23, 31, 39) 100%
  ) !important;
  clip-path: polygon(0 0, 30% 20%, 50% 0, 70% 20%, 100% 0, 100% 100%, 0 100%);
  border-top: 1px solid rgba(250, 204, 21, 0.2);
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  padding: 3rem 1rem 1rem 1rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    color: #facc15;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Copyright>
          &copy; {new Date().getFullYear()} Minseo Lee. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
