import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { LoginPage } from "./Pages/Login"

function App(): JSX.Element {
  return (
    <div className="App">
      <header>Hello World. =)</header>
      <LoginPage />
    </div>
  )
}

export default App
