import React from "react"
import { Button } from "src/Components/Button"
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "src/Components/Table"
import { getUsers as getUsersQuery, User } from "src/Api/Queries/GetUsers"

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
          <Table>
            <TableHead>
              <TableRow>
                <TableCell type="th">ID</TableCell>
                <TableCell type="th">Nome</TableCell>
                <TableCell type="th">Telefone</TableCell>
                <TableCell type="th">Data de Nascimento</TableCell>
                <TableCell type="th">Função</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell type="td">{user.id}</TableCell>
                  <TableCell type="td">{user.name}</TableCell>
                  <TableCell type="td">{user.phone}</TableCell>
                  <TableCell type="td">{user.birthDate}</TableCell>
                  <TableCell type="td">{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
    const { offset, limit } = this.state
    this.setState({ loading: true })
    getUsersQuery({ offset, limit }).then((response) => {
      this.setState({
        loading: false,
        users: [
          ...(this.state.users || []),
          ...(response.data?.users.nodes || []),
        ],
        count: response.data?.users.count,
      })
    })
  }
}

export { UsersListPage }
