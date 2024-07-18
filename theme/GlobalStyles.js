import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    font-family: "Outfit";
    font-weight: 400;
    font-style: normal;
    background-color: ${({ theme }) => theme.background};
  }
`;
