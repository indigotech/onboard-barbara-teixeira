import React from 'react'
import { TextField } from '../TextField'

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <TextField label='E-mail' fieldName='email' />
        <TextField label='Password' fieldName='password' fieldType='password' />
      </form>
    )
  }
}

export { LoginForm }