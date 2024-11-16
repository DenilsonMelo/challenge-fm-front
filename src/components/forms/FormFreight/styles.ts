import styled from "styled-components";

export const Container = styled.div`
  margin-top: 42px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 20px;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primaryText[6]};
    margin-bottom: 6px;
  }

  input,
  select {
    padding: 8px 12px;
    color: ${({ theme }) => theme.colors.primaryText[4]};
    border-radius: 8px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primaryText[0]};
    height: 40px;
  }

  button {
    height: 38px;
    font-weight: 500;
    font-size: 16px;
    border-radius: 16px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .button-sucess {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryText[9]};
  }

  .button-cancel {
    margin-top: -8px;
    background-color: ${({ theme }) => theme.colors.primaryText.white};
    color: ${({ theme }) => theme.colors.primaryText[6]};
  }
`;

export const RadioGroup = styled.div`
  label {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primaryText[6]};
    margin-bottom: 6px;
  }

  div {
    margin: 6px 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primaryText[6]};
  }

  input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    border: none;
    transform: scale(1.2);

    &:checked {
      accent-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
