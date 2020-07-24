import React, { InputHTMLAttributes } from "react"

type Props = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

class TextField extends React.Component<Props> {
  public static defaultProps = {
    type: "text",
  }
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
