import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --color-dark: #353535;
    --color-primary: #FAA500; 
    --color-white:  #ffffff;
    --color-gray: #EFEFEF;

    font-size: 16px;
  }

 

  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-size: 1rem;
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

  .newsletter-overlay {
    z-index: 3;
    background: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .newsletter-content {
    width: 50%;
    max-width: 60rem;
    /* height: 50%; */
    background: #ffffff;
  }


  @media (max-width: 1180px){
    .newsletter-content {
      width: 90%;
      
    }
  }
`