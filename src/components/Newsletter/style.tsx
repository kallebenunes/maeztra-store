import styled from 'styled-components'

export const Container = styled.div`

@media (max-width: 1024px){
    padding: 4rem;
  }

  @media (max-width: 360px){
    padding: 2rem;
  }  


  /* margin: 0rem 20rem; */
  padding: 2rem 20rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #EFEFEF;
  border-top: 1px solid #EFEFEF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;
  text-align: center;

  h1 {
    margin-right: 3rem;
    flex-grow: 1;
  }

  div {
    flex-grow: 4;
    display: flex;
  }

  input {
    border: 1px solid #353535;
    padding: .4rem 1rem;
    border-radius: .25rem;
    flex-grow: 5;
  }

  button {
    background: var(--color-primary);
    color: var(--color-white);
    padding: .48rem 1rem;
    margin-left: -5px;
    border-radius: .25rem;
    flex-grow: 1;
  }
`