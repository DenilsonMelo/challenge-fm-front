import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`${css`
  :root {
    --toastify-font-family: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    list-style: none;
  }

  html,
  body,
  #__next {
    min-height: 100%;
  }

  html {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }

  button,
  input,
  select,
  textarea,
  body {
    font-family: var(--font-inter), sans-serif !important;
  }

  body {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primaryText[9]};
    background-color: ${({ theme }) => theme.colors.primaryText[2]};
    -webkit-font-smoothing: antialiased !important;
  }

  [disabled],
  input[readonly] {
    opacity: 0.6;
    cursor: not-allowed !important;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: -1px;
  }

  h2 {
    font-size: 1.563rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: -1px;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;
    letter-spacing: -1px;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.438rem;
    letter-spacing: -1px;
  }
`}`;
