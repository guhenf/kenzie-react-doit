import { Container, Content } from "./style"
import Button from "../../Components/Button"
import { Redirect, useHistory } from "react-router-dom"

export default function Home({ authenticated }) {
  const history = useHistory()
  const handleNavigation = (path) => {
    return history.push(path)
  }

  if (authenticated) {
    return <Redirect />
  }

  return (
    <Container>
      <Content>
        <h1>do.it</h1>
        <span>Organize-se de forma fácil e efetiva.</span>
        <div>
          <Button onClick={() => handleNavigation("/register")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  )
}
