import React from "react"
import { TextField } from "@Components/TextField"
import { Button } from "@Components/Button"

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
  }

  render(): JSX.Element {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="E-mail"
            name="email"
            value={this.state.email}
            onChange={this.changeEmail}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.changePassword}
          />
          <Button text="Entrar" type="submit" />
        </form>
      </div>
    )
  }

  private changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.currentTarget.value })
  }
  private changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.currentTarget.value })
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const errors = []
    if (this.state.password.length <= 0) {
      errors.push("A senha e obrigatoria.")
    } else if (this.state.password.length < 7) {
      errors.push("Sua senha deve ter no min. 7 carateres.")
    }
    if (!/\d/.test(this.state.password) || !/\w/.test(this.state.password)) {
      errors.push("Sua senha deve conter ao menos uma letra e um digito")
    }
    if (
      !/^[\w]+([+-._][a-z0-9]*)*@[\w.-]+(\.[a-z]{2,3})+$/.test(this.state.email)
    ) {
      errors.push("Este não é um formato de e-mail válido")
    }
    this.setState({ errors })
  }
}

export { LoginForm }
