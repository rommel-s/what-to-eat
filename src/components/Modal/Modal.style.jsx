import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(125, 125, 125, 0.5);
  backdrop-filter: blur(2px);
  position: fixed;
  overflow-y: hidden;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  width: 80%;
  height: 200px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2000;
  border-radius: 10px;
`;

export const FlavorText = styled.p`
  font-weight: 500;
`;
export const OptionChoosed = styled.p`
  font-weight: ${({ theme }) => theme.fonts.black};
  font-size: ${({ theme }) => theme.size.xl};
`;
