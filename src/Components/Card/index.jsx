import { Container } from "./style"
import { FiClipboard, FiCalendar } from "react-icons/fi"
import Button from "../Button"

export default function Card({ title, date, onClick }) {
  return (
    <Container>
      <span>
        <FiClipboard /> {title}
      </span>
      <hr />
      <time>
        <FiCalendar /> {date}
      </time>
      <Button onClick={onClick}>Concluir</Button>
    </Container>
  )
}
