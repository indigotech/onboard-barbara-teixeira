import { gql, FetchResult } from "@apollo/client"
import { client } from "src/Api/client"

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
export interface User {
  id: string
  name: string
  phone: string
  email: string
  birthDate: string
  role: string
}

const getUsers = (variables: {
  offset: number
  limit: number
}): Promise<FetchResult<{ users: { count: number; nodes: User[] } }>> =>
  client.query({
    query: LIST_USERS_QUERY,
    variables,
  })

export { getUsers }
