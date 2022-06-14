import styled, { css } from "styled-components"

export const Container = styled.div`
  text-align: left;

  div {
    span {
      color: var(--red);
    }
  }
`

export const InputCont = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  border: 2px solid var(--gray);
  color: var(--gray);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  ${(props) =>
    props.isError &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    background-color: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);

    cursor: text;

    &::placeholder {
      color: var(--gray);
    }
  }

  svg {
    margin-right: 15px;
  }
`
