import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryText.white};
  overflow: auto;
  margin: 32px 42px;
  padding: 16px;
  grid-area: main;
  border-radius: 16px;
`;
