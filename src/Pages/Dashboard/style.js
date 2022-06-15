import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 38px;
`

export const InputContainer = styled.form`
  flex: 1;
  margin-top: 30px;
  padding: 0 38px;
  width: 100%;

  section {
    display: flex;

    > div {
      max-width: 80%;
      flex: 1;
      margin-right: 16px;
    }

    button {
      max-width: 250px;
      height: 55px;
      margin: 0;
    }
  }
`

export const TasksContainer = styled.div`
  padding: 0 38px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

  div {
    margin: 16px 32px 0 0;
  }
`
