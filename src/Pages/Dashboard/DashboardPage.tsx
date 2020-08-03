import React from "react"
import { AUTH_TOKEN } from "src/constants"
import { RouteComponentProps } from "react-router"

class DashboardPage extends React.Component<RouteComponentProps> {
  render(): JSX.Element {
    return (
      <section>
        <h1>Seja bem vindo a TaqTile!</h1>
        <img src="https://http.cat/200" alt="200-ok"></img>
        <button onClick={this.logout}>SAIR</button>
      </section>
    )
  }

  private logout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    this.props.history.push("/login")
  }
}

export { DashboardPage }
