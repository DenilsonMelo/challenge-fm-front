import styled, { css } from "styled-components";

export const Container = styled.div`
  grid-area: aside;

  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryText.white};
  overflow: auto;
  z-index: 2;

  .separator {
    width: 194px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primaryText[0]};
    margin: 0 auto;
  }
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 107px;
  border-radius: 0 0px 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tabs = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin: 56px 0;
`;

export const TabItem = styled.li<{ $active: boolean }>`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;

  & + & {
    margin-top: 36px;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.primaryText[4]};
  }

  position: relative;

  ${({ $active }) =>
    $active
      ? css`
          a {
            color: ${({ theme }) => theme.colors.primaryText[9]};
          }
          
          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: -24px; 
            height: 100%;
            width: 4px;
            background-color: ${({ theme }) => theme.colors.primary}; 
          }
        `
      : css`
          &:hover {
            a {
              color: ${({ theme }) => theme.colors.primaryText[9]};
            }
          }
        `}
`;
