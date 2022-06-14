import { Link, useHistory } from "react-router-dom"
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"

import { Container, Content, AnimationContainer } from "./style"
import Input from "../../Components/Input"
import Button from "../../Components/Button"

import Api from "../../services/api"

export default function Register() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!").email("Email invalido"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(8, "Mínimo de 8 caracteres."),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes."),
  })

  const history = useHistory()

  const onSubmitFunction = ({ name, email, password }) => {
    const user = { name, email, password }

    Api.post("/user/register", user)
      .then((_) => {
        toast.success("Cadastrado com sucesso!")
        return history.push("/login")
      })
      .catch((err) => toast.error("Algo deu errado...Tente outro email!"))
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) })

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastre-se</h1>
            <Input
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome"
              name="name"
              register={register}
              error={errors.name?.message}
            ></Input>
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
            <Input
              icon={FiLock}
              label="Senha"
              placeholder="Confirme sua senha"
              type="password"
              name="passwordConfirm"
              register={register}
              error={errors.passwordConfirm?.message}
            ></Input>
            <Button type="submit">Enviar</Button>
            <p>
              Ja tem uma Conta? Faca seu <Link to="/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}
