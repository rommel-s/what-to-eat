import styled from "styled-components";

export const WrapperUp = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 28px 1px #0000000d;

  width: 100%;
  height: 8rem;
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 490px) {
    height: 8rem;
  }
`;

export const InputAndChoose = styled.div`
  width: 100%;
  height: 150px;
  padding: 30px;
  position: fixed;
  bottom: 0;
  left: 0;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 28px 1px #0000000d;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 50;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OptionsField = styled.div`
  background-color: ${({ theme }) => theme.colors.gray03};
  z-index: -10;
  width: 100%;
  height: 100vh;
  position: absolute;
  overflow: scroll;
  margin-top: 20vh;
  left: 0;
  padding: 20px 10px 50px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 489px) {
    margin-top: 6rem;
    padding: 50px 10px 50px 10px;
  }
`;
