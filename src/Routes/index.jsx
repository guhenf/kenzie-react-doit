import { Route, Switch } from "react-router-dom"
import Register from "../Pages/Register"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Dashboard from "../Pages/Dashboard"
import { useEffect, useState } from "react"

export default function Routes() {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Doit:token"))
    if (token) {
      return setAuthenticated(true)
    }
  }, [authenticated])

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>

      <Route path="/register">
        <Register authenticated={authenticated} />
      </Route>

      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route path="/dashboard">
        <Dashboard authenticated={authenticated} />
      </Route>
    </Switch>
  )
}
