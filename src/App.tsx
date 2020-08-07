import React from "react"
import "./App.css"
import { LoginPage } from "src/Pages/Login"
import { DashboardPage } from "src/Pages/Dashboard"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { PrivateRoute } from "./Components/PrivateRoute"
import { UsersListPage } from "./Pages/UsersList"

function App(): JSX.Element {
  return (
    <div className="App">
      <header>Olá Mundo!</header>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={DashboardPage} />
          <PrivateRoute exact path="/users" component={UsersListPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
