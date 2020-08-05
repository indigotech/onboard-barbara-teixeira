import React from "react"
import { TextField } from "src/Components/TextField"
import { Button } from "src/Components/Button"
import { AUTH_TOKEN, PASSWORD_LENGTH } from "../../constants"
import {
  hasDigit,
  hasLetter,
  validEmail,
  required,
  minLength,
} from "src/Validators"
import { Redirect } from "react-router"
import { login } from "src/Api/Mutations/Login"

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    errors: { login: "" },
    redirectToLastPath: false,
    loading: false,
  }

  render(): JSX.Element {
    if (this.state.redirectToLastPath) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="E-mail"
            name="email"
            value={this.state.email}
            validations={[required, validEmail]}
            onValueChange={this.changeEmail}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            validations={[
              required,
              hasDigit,
              hasLetter,
              minLength(PASSWORD_LENGTH),
            ]}
            onValueChange={this.changePassword}
          />
          <Button text="Entrar" type="submit" loading={this.state.loading} />
          <div>
            {this.state.errors.login && (
              <caption key={this.state.errors.login}>
                {this.state.errors.login}
              </caption>
            )}
          </div>
        </form>
      </div>
    )
  }

  private changeEmail = (value: string) => {
    this.setState({ email: value })
  }

  private changePassword = (value: string) => {
    this.setState({ password: value })
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { email, password } = this.state
    this.setState({
      errors: { login: "" },
      loading: true,
    })
    login({ email, password })
      .then(({ data }) => {
        localStorage.setItem(AUTH_TOKEN, data?.login.token)
      })
      .then(() => this.setState({ redirectToLastPath: true }))
      .catch((errorReason) => {
        this.setState({
          errors: { login: errorReason.message },
          loading: false,
        })
      })
  }
}

export { LoginForm }
