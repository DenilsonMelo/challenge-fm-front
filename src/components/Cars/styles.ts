import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryText.white};
  overflow: auto;
  grid-area: main;
  border-radius: 16px;
  padding-bottom: 32px;
`;

export const CarLabels = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr 1fr;
  margin-top: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryText[4]};
  padding: 12px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryText[3]};
`;

export const CarContent = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr 1fr;

  span {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primaryText[9]};
    padding: 12px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.primaryText[3]};
  }
`;