import styled from 'styled-components'


export const Container  = styled.header`
  margin: 0 auto;
  width: 100%;
`;

export const SearchBar = styled.div`
  input {
    background: var(--color-gray);
    border-radius: 0.4rem 0rem 0rem .4rem;
    padding: 0.5rem 1rem;
    outline: transparent;
    
    
  }

  button {
    background: var(--color-primary);
    color: var(--color-white);
    font-weight: 400;
    padding: 0.5rem 2rem;
    border-radius: .5rem;
    margin-left: -5px;
    
  }
`

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  padding: 1rem 11rem;

  @media (max-width: 1320px){
    /* display: none; */
    padding: 1rem 6rem;
  }

  @media (max-width: 1024px){
    display: none;
  }

  nav {
    ul {
      display: flex;
      

      li {
        cursor: pointer;
        display: flex;
        border: 1px solid transparent;
        border-radius: 8px;
        padding: .5rem .8rem;

        &:nth-child(3) {
          border: 1px solid var(--color-primary);
        }

        img {
          padding-right: .5rem;
        }

      }

      li + li {
        margin-left: 1.2rem;
      }
    }
  }
`

export const TopBar = styled.p`
  width: 100%;
  font-size: 14px;
  padding: .5rem 11rem;
  text-align: center;
  color: var(--color-white);
  background: var(--color-dark);
  font-weight: 100;

  @media (max-width: 360px){
    padding: 2rem;
  }  
`

export const CategoryMenu = styled.nav`

  @media(max-width: 1024px){
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 9rem;

    li {
      a {
        padding: .5rem 2rem;
        display: block;
        color: var(--color-dark);
        transition: .2s color;

        &:hover {
          color: var(--color-primary);
        }
      }
    }

  }
`

export const MainHeaderMobile = styled.div`

  padding: 2rem 2rem;
  display: none;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px){
    display: flex;
  }

  button {
    background: transparent;
  }

  div { 
    display: flex;
    align-items: center;

     button:nth-of-type(1) {
      margin-right: 1rem;
     }
  }


`