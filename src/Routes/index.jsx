import { Route, Switch } from "react-router-dom"
import Register from "../Pages/Register"
import Home from "../Pages/Home"
import Login from "../Pages/Login"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  )
}
