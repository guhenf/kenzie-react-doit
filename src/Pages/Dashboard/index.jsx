import { Redirect } from "react-router-dom"
import { set, useForm } from "react-hook-form"
import { FiEdit2 } from "react-icons/fi"
import { useEffect, useState } from "react"

import Input from "../../Components/Input"
import Button from "../../Components/Button"
import { Container, InputContainer, TasksContainer } from "./style"
import Card from "../../Components/Card"
import Api from "../../services/api"
import { toast } from "react-toastify"

export default function Dashboard({ authenticated }) {
  const [tasks, setTasks] = useState([])
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Doit:token")) || ""
  )
  const { register, handleSubmit } = useForm()

  function loadTasks() {
    Api.get("/task", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        completed: false,
      },
    })
      .then((res) => {
        const apiTasks = res.data.data.map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }))
        setTasks(apiTasks)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    loadTasks()
  }, [])

  const onSubmit = ({ task }) => {
    if (!task) {
      return toast.error("Insira uma tarefa!")
    }

    Api.post(
      "/task",
      {
        description: task,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => loadTasks())
  }

  const handleCompleted = (id) => {
    const newTasks = tasks.filter((task) => task._id !== id)

    Api.put(
      `/task/${id}`,
      { completed: true },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => setTasks(newTasks))
  }

  if (!authenticated) {
    return <Redirect to="/login" />
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <time>14 de julho de 2022</time>
        <section>
          <Input
            icon={FiEdit2}
            register={register}
            placeholder="Nova tarefa"
            name="task"
            error=""
          />
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TasksContainer>
        {tasks.map((task) => (
          <Card
            key={task._id}
            title={task.description}
            date={task.createdAt}
            onClick={() => handleCompleted(task._id)}
          ></Card>
        ))}
      </TasksContainer>
    </Container>
  )
}
