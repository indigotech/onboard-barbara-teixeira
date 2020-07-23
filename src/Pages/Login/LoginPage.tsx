import React from 'react'
import { LoginForm } from '../../Components/LoginForm'

class LoginPage extends React.Component {
  render() {
    return (
      <section>
        <h1>Cadastre-se</h1>
        <LoginForm />
      </section>
    )
  }
}

export { LoginPage }