import React from 'react'
import { TextField } from '../TextField'
import { Button } from '../Button'

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <TextField label='E-mail' fieldName='email' />
        <TextField label='Password' fieldName='password' fieldType='password' />
        <Button buttonName='Entrar' />
      </form>
    )
  }
}

export { LoginForm }