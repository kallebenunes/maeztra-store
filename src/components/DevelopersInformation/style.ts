import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  div + div {
    margin-left: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;