import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --color-dark: #353535;
    --color-primary: #FAA500; 
    --color-white:  #ffffff;
    --color-gray: #EFEFEF;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-size: .875rem;
    font-family: 'Titillium Web';
  }

  h1, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1rem;
  }

  button {
    cursor: pointer;
  }

  body {
    max-width: 120rem;
    margin: 0 auto;
    
  }
`