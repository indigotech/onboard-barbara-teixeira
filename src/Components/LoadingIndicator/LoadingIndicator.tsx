import React from "react"
import { PuffLoader } from "react-spinners"

export interface LoadingIndicatorProps {
  size?: number
  color?: string
  loading: boolean
}

const LoadingIndicator = (props: LoadingIndicatorProps): JSX.Element => {
  return (
    <PuffLoader size={props.size} color={props.color} loading={props.loading} />
  )
}

export { LoadingIndicator }
