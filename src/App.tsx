import React from "react"
import "./App.css"
import { LoginPage } from "src/Pages/Login"
import { DashboardPage } from "src/Pages/Dashboard"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { PrivateRoute } from "./Components/PrivateRoute"

function App(): JSX.Element {
  return (
    <div className="App">
      <header>Hello World. =)</header>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={DashboardPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
