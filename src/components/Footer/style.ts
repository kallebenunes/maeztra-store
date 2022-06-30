import styled from 'styled-components'

export const Container = styled.div`

`;

export const FooterNav = styled.div`
  margin: 0 20rem 2rem 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: var(--color-dark);

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
  background: var(--color-dark);
  padding: 1rem 11rem;
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

