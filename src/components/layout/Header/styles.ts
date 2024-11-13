import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  background-color: ${({ theme }) => theme.colors.primaryText.white};
  width: 100%;
  height: 80px;
  z-index: 3;

  padding: 0 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleSection = styled.h1`
    font-size: 24px;
    color: ${({theme}) => theme.colors.primaryText[8]};
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 42px;

    div{
        cursor: pointer;
        display: flex;
        align-items: center;

        span{
            font-size: 14px;
        }
    }

    .user{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.colors.primaryText[5]};
        margin-right: 8px;
    }
`;
