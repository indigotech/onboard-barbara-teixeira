import React from "react"
import { PuffLoader } from "react-spinners"

export interface LoadingIndicatorProps {
  size?: number
  color?: string
  loading: boolean
}

class LoadingIndicator extends React.Component<LoadingIndicatorProps> {
  render(): JSX.Element {
    return (
      <PuffLoader
        size={this.props.size}
        color={this.props.color}
        loading={this.props.loading}
      />
    )
  }
}

export { LoadingIndicator }
