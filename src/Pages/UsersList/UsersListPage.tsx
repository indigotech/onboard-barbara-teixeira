import React from "react"
import { client } from "src/client"
import { gql, ApolloQueryResult } from "@apollo/client"
import { Button } from "src/Components/Button"

const LIST_USERS_QUERY = gql`
  query getUsers($offset: Int, $limit: Int) {
    users(pageInfo: { offset: $offset, limit: $limit }) {
      nodes {
        id
        name
        phone
        email
        birthDate
        role
      }
      count
    }
  }
`
interface User {
  id: string
  name: string
  phone: string
  email: string
  birthDate: string
  role: string
}

class UsersListPage extends React.Component {
  state: {
    loading: boolean
    users?: User[]
    offset: number
    limit: number
    count: number
    feedbackMessage?: string
  } = {
    loading: false,
    offset: 0,
    limit: 25,
    count: 0,
  }

  componentDidMount(): void {
    if (this.state.users) return

    this.getUsers()
  }

  render(): JSX.Element {
    return (
      <section>
        <h1> Lista de usuários </h1>
        {this.state.users && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Data de nasc.</th>
                <th>Função</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.birthDate}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {this.state.feedbackMessage}
        <Button
          text="Carregar mais..."
          loading={this.state.loading}
          onClick={this.loadMoreUsers}
        />
      </section>
    )
  }

  private loadMoreUsers = () => {
    const nextOffset = this.state.offset + this.state.limit

    if (nextOffset < this.state.count) {
      this.setState({ offset: nextOffset }, () => this.getUsers())
    } else {
      this.setState({ feedbackMessage: "Não há mais usuários para carregar." })
    }
  }

  private getUsers = () => {
    if (this.state.loading) return
    this.setState({ loading: true })
    client
      .query({
        query: LIST_USERS_QUERY,
        variables: { offset: this.state.offset, limit: this.state.limit },
      })
      .then(
        (
          response: ApolloQueryResult<{
            users: { count: number; nodes: User[] }
          }>
        ) => {
          this.setState({
            loading: false,
            users: [
              ...(this.state.users || []),
              ...(response.data?.users.nodes || []),
            ],
            count: response.data?.users.count,
          })
        }
      )
  }
}

export { UsersListPage }
