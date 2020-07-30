import React, { InputHTMLAttributes } from "react"

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  validations: ((val: string) => string)[]
  onValueChange: (value: string) => void
  onValidation: (errors: string[], name: string) => void
}

class TextField extends React.Component<TextFieldProps> {
  state = { errors: [] }

  render(): JSX.Element {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          {...this.props}
          onChange={this.handleChange}
          onBlur={this.callValidations}
        />

        {this.state.errors.map((error) => (
          <caption key={error}>{error}</caption>
        ))}
      </div>
    )
  }

  private callValidations = (event: React.ChangeEvent<HTMLInputElement>) => {
    const errors: string[] = this.props.validations
      .map((validation) => validation(event.currentTarget.value))
      .filter((error) => error.length > 0)

    this.setState({ errors })
    this.props.onValidation(errors, event.currentTarget.name)
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onValueChange(event.currentTarget.value)
    this.setState({ errors: [] })
  }
}

export { TextField }
