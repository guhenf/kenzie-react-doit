import { Container } from "./style"

export default function Button({ children, whiteSchema = false, ...rest }) {
  return (
    <Container whiteSchema={whiteSchema} type="button" {...rest}>
      {children}
    </Container>
  )
}
