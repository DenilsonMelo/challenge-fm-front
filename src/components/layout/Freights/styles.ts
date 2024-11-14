import styled, { css } from "styled-components";

export const Container = styled.div``;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 2fr 2fr 2fr 1fr;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryText[4]};
  padding: 12px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryText[3]};
`;

export const TableContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 2fr 2fr 2fr 1fr;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText[9]};
  padding: 12px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryText[3]};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  input {
    height: 36px;
    width: 400px;
    border-radius: 500px;
    border: 1px solid ${({ theme }) => theme.colors.primaryText[0]};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primaryText[4]};
    padding-left: 40px;
  }

  .add-button {
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.primaryText[4]};
    padding: 10px 14px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryText[2]};
    }
  }
`;

export const Content = styled.div``;

export const Sidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 420px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryText.white};
  color: red;
  z-index: 4;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(100%);
        `};

  transition: transform 0.3s ease;
  padding: 28px;

  span{
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primaryText[9]};
  }

  .close-button{
    border-radius: 50%;
    padding: 12px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryText[2]};
    }
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #444;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
