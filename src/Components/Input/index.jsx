import { Container, InputCont } from "./style"

export default function Input({
  label,
  icon: Icon,
  register,
  name,
  error = "",
  ...rest
}) {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputCont isError={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputCont>
    </Container>
  )
}
