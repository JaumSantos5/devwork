import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI';
    list-style: none;
    text-decoration: none;
    color: #fff;
  }

  body {
    background-image: linear-gradient(145deg, rgba(20, 61, 85, 1) 15%, rgba(21, 43, 56, 1) 36%, rgba(12,12,12,1) 100%);
  }

  .container {
    margin: 0 auto;
    @media (max-width: 480px) {
      width: 100%

    }

    @media (min-width: 1921px) {
      width: 1920px
    }
  }

`