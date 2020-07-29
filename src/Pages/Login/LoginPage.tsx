import React from "react"
import { LoginForm } from "@Components/LoginForm"

class LoginPage extends React.Component {
  render(): JSX.Element {
    return (
      <section>
        <h1>Seja bem vindo a TaqTile!</h1>
        <LoginForm />
      </section>
    )
  }
}

export { LoginPage }
