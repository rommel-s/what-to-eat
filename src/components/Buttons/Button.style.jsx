import styled from "styled-components";

export const MainButton = styled.button`
  width: 80vw;
  height: 80px;
  border: none;
  background: linear-gradient(
    292.05deg,
    ${({ theme }) => theme.colors.primary} 4.04%,
    ${({ theme }) => theme.colors.secondary} 98.56%
  );
  border-radius: 9px;
  transition: 0.4s;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.semibold};
  font-size: ${({ theme }) => theme.size.default};
  margin-top: 10px;

  &:hover {
    background: linear-gradient(
      159.37deg,
      ${({ theme }) => theme.colors.primary} -5.54%,
      ${({ theme }) => theme.colors.secondary} 103.48%
    );

    box-shadow: 4px 8px 16px rgba(240, 157, 3, 0.342);
  }
`;

export const AddButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  margin-left: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: linear-gradient(
    292.05deg,
    ${({ theme }) => theme.colors.primary} 4.04%,
    ${({ theme }) => theme.colors.secondary} 98.56%
  );

  &:hover {
    background: linear-gradient(
      159.37deg,
      ${({ theme }) => theme.colors.primary} -5.54%,
      ${({ theme }) => theme.colors.secondary} 103.48%
    );

    box-shadow: 4px 8px 16px rgba(240, 157, 3, 0.342);
  }
`;
