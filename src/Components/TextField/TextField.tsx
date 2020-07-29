import React, { InputHTMLAttributes } from "react"

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

class TextField extends React.Component<TextFieldProps> {
  render(): JSX.Element {
    return (
      <div>
        <label>{this.props.label}</label>
        <input {...this.props} />
      </div>
    )
  }
}

export { TextField }
