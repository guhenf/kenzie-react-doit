import { Link, Redirect, useHistory } from "react-router-dom"
import { FiMail, FiLock } from "react-icons/fi"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"

import { Container, Content, AnimationContainer } from "./style"
import Input from "../../Components/Input"
import Button from "../../Components/Button"

import Api from "../../services/api"

export default function Login({ authenticated, setAuthenticated }) {
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Email invalido"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(8, "Mínimo de 8 caracteres."),
  })

  const history = useHistory()

  const onSubmitFunction = (data) => {
    Api.post("/user/login", data)
      .then((res) => {
        const { token } = res.data

        localStorage.setItem("@Doit:token", JSON.stringify(token))
        setAuthenticated(true)

        return history.push("/dashboard")
      })
      .catch((_) => toast.error("Email ou senha inválidos!"))
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) })

  if (authenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
            <Input
              icon={FiMail}
              label="Email"
              placeholder="Seu email"
              name="email"
              register={register}
              error={errors.email?.message}
            ></Input>
            <Input
              icon={FiLock}
              label="Senha"
              placeholder="Sua senha"
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
            ></Input>
            <Button type="submit">Entrar</Button>
            <p>
              Nao tem uma conta? <Link to="/register">Cadastre-se</Link> aqui!
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}
