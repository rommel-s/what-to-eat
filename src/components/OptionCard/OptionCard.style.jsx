import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & svg {
    color: ${({ theme }) => theme.colors.gray01};
    width: 40px;
    height: 40px;
    padding: 7px;
    border-radius: 8px;
  }

  & svg:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.gray03};
  }
`;

export const Item = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`;
