import styled from "styled-components";

export const Container = styled.div`

  display: none;

  @media (max-width: 1024px){
    display: block;
  }

  .accordion__item, .accordion {
    border: none;
  }

  .accordion__button {
    background: var(--color-white);
    border: none;
    display: flex;
    align-items: center;
    position: relative;

    &::after {
   
      font-size: 1.5rem;
      right: 20px;
      position: absolute;
      content: '+';
    }

    &::before {
      display: none;
    }
  }

  ul {
      li {
        a {
          color: var(--color-dark);
          padding: .3rem 0;
          margin: .6rem 0;
          display: block;
          
        }
      }
    }

`;