import React from "react"
import { TextField } from "src/Components/TextField"
import { Button } from "src/Components/Button"
import { gql } from "@apollo/client"
import { client } from "src/client"
import { AUTH_TOKEN, PASSWORD_LENGTH } from "../../constants"
import {
  hasDigit,
  hasLetter,
  validEmail,
  required,
  minLength,
} from "src/Validators"

const LOGIN_MUTATION = gql`
  mutation mutationLogin($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    errors: { email: ["is-empty"], password: ["is-empty"], login: "" },
  }

  render(): JSX.Element {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="E-mail"
            name="email"
            value={this.state.email}
            validations={[required, validEmail]}
            onValueChange={this.changeEmail}
            onValidation={this.handleErrorChange}
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
            onValidation={this.handleErrorChange}
          />
          <Button text="Entrar" type="submit" disabled={this.hasErrors()} />
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

  private hasErrors = () => {
    return (
      this.state.errors.email.length > 0 ||
      this.state.errors.password.length > 0
    )
  }

  private changeEmail = (value: string) => {
    this.setState({ email: value })
  }

  private changePassword = (value: string) => {
    this.setState({ password: value })
  }

  private handleErrorChange = (errors: string[], name: string) => {
    this.setState({ errors: { ...this.state.errors, [name]: errors } })
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.setState({
      errors: { ...this.state.errors, login: "" },
    })

    client
      .mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          email: this.state.email,
          password: this.state.password,
        },
      })
      .then(({ data }) => {
        localStorage.setItem(AUTH_TOKEN, data.login.token)
      })
      .catch((errorReason) => {
        this.setState({
          errors: { ...this.state.errors, login: errorReason.message },
        })
      })
  }
}

export { LoginForm }
