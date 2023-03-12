import styled from "styled-components";

export const MainHeader = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.size.s};
  text-align: center;
  line-height: 1em;
`;

export const ContainerText = styled.p`
  color: ${({ theme }) => theme.colors.gray01};
  text-align: center;
  line-height: 1em;
`;
