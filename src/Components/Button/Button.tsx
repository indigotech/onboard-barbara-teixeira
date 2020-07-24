import React from "react"

type Props = {
  buttonName: string
}

class Button extends React.Component<Props> {
  public static defaultProps = {
    type: "submit",
  }
  render(): JSX.Element {
    return <button {...this.props}> {this.props.buttonName} </button>
  }
}

export { Button }
