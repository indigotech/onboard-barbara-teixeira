import React, { ButtonHTMLAttributes } from "react"
import { LoadingIndicator } from "src/Components/LoadingIndicator"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  loading?: boolean
}

class Button extends React.Component<ButtonProps> {
  render(): JSX.Element {
    const { onClick, type } = this.props
    return (
      <button {...{ onClick, type }}>
        {this.props.loading ? (
          <LoadingIndicator size={25} loading={this.props.loading} />
        ) : (
          this.props.text
        )}
      </button>
    )
  }
}

export { Button }
