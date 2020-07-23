import React from 'react'

type Props = {
  label: string,
  fieldName: string,
  fieldType: string
}

class TextField extends React.Component<Props> {
  public static defaultProps = {
   fieldType: 'text'
  }
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input name={this.props.fieldName} type={this.props.fieldType} />
      </div>
    )
  }
}

export { TextField }