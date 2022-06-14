import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`

const appearFromRight = keyframes`

from {
  opacity: 0;
  transform: translateX(50px);
}

to {
  opacity: 1;
  transform: translateX(0px);
}
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 300px;
    text-align: center;

    h2 {
      margin-bottom: 30px;
    }

    > div {
      margin-top: 15px;
    }

    p {
      margin-top: 8px;

      a {
        font-weight: 700;
        color: red;
      }
    }
  }
`
