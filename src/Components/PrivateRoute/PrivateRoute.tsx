import React from "react"
import { AUTH_TOKEN } from "src/constants"
import { Redirect, Route, RouteComponentProps } from "react-router-dom"

export interface PrivateRoutesProps {
  component: React.ComponentType<RouteComponentProps> | React.ComponentType
  path: string
  exact: boolean
}
class PrivateRoute extends React.Component<PrivateRoutesProps> {
  render(): JSX.Element {
    const token = localStorage.getItem(AUTH_TOKEN)
    return token ? (
      <Route
        exact={this.props.exact}
        path={this.props.path}
        component={this.props.component}
      />
    ) : (
      <Redirect to="/login" />
    )
  }
}

export { PrivateRoute }
