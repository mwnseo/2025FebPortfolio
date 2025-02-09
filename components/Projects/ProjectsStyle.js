import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: rgb(23, 31, 39) !important;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: -80px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const StarBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(250, 204, 21, 0.8);
    box-shadow: ${Array(12).fill().map(() => {
      const x = Math.floor(Math.random() * 1000);
      const y = Math.floor(Math.random() * 500);
      return `${x}px ${y}px rgba(250, 204, 21, 0.8)`;
    }).join(',')};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(250, 204, 21, 0.05) 0%,
      transparent 60%
    );
    z-index: -1;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #ffd700;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid #facc15;
  color: #facc15;
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
  background: rgba(30, 41, 59, 0.8);
  box-shadow: 0 4px 14px rgba(250, 204, 21, 0.1);
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    background: rgba(250, 204, 21, 0.2);
    box-shadow: 0 0 10px rgba(250, 204, 21, 0.15);
    `}
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

export const Divider = styled.div`
  width: 1.5px;
  background: rgba(250, 204, 21, 0.4);
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  padding: 0 20px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
