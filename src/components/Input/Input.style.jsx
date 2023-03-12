import styled from "styled-components";

const UserInput = styled.input`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray01};
  padding: 10px 15px;

  &:focus {
    box-shadow: 4px 8px 16px rgba(82, 83, 83, 0.14);
    border-color: ${({ theme }) => theme.colors.middle};
    outline: none;
  }
`;

export default UserInput;
