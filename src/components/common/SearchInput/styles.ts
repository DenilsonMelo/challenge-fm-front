import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  height: 36px;
  width: 400px;
  border-radius: 500px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText[0]};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryText[4]};
  padding-left: 40px;
  outline: none;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 55%;
  transform: translateY(-50%);
  color: #aaa;
`;
