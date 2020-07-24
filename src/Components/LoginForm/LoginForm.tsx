import React from "react"
import { TextField } from "../TextField"
import { Button } from "../Button"

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
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <TextField
            label="E-mail"
            name="email"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.currentTarget.value })
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.currentTarget.value })
            }}
          />
          <Button text="Entrar" />
        </form>
      </div>
    )
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
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
    this.setState({ errors })
  }
}

export { LoginForm }
