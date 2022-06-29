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

  button {
    cursor: pointer;
  }

  body {
    max-width: 120rem;
    margin: 0 auto;
    
  }
`