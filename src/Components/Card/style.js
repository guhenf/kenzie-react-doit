import styled from "styled-components"

export const Container = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--black);

  hr {
    width: 80%;
    margin: 15px 0px 0px 15px;
  }

  button {
    margin-top: 60px;
    align-self: flex-end;
  }

  svg {
    font-size: 1.1rem;
    color: #0707;
    margin-right: 4px;
    transform: translateY(3px);
  }
`
