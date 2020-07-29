import React, { ButtonHTMLAttributes } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

class Button extends React.Component<ButtonProps> {
  render(): JSX.Element {
    return <button {...this.props}> {this.props.text} </button>
  }
}

export { Button }
