import styled from 'styled-components'

export const Container = styled.div`
  /* margin: 0rem 20rem; */
  padding: 2rem 20rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #EFEFEF;
  border-top: 1px solid #EFEFEF;
  display: flex;
  align-items: center;
  justify-content: space-between;

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