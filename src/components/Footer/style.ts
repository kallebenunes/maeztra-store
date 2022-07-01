import styled from 'styled-components'

export const Container = styled.div`

`;

export const FooterNav = styled.div`
  margin: 0 20rem 2rem 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: var(--color-dark);

  @media(max-width: 1152px){
    margin: 0 10rem 2rem 10rem;
  }
  
  @media (max-width: 1024px){
    display: none;
  }

  @media (max-width: 360px){
    margin: 2rem;
    grid-template-columns: 1fr;
  }
  /* @media(max-width: 1024px){
    grid-template-columns: 1fr;
  } */

  nav:nth-of-type(3){
    justify-self: end;
  }

  nav:nth-of-type(2) {
    justify-self: center;
  }

  nav {
    h1 {
      font-weight: 700;
      margin-bottom: .5rem;
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

    
  }

`;

export const AdditionalInformations = styled.div`


  @media (max-width: 720px){
      padding: 2rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  background: var(--color-dark);
  padding: 1rem 11rem;
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

