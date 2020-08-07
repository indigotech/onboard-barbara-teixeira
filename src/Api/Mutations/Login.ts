import { gql, FetchResult } from "@apollo/client"
import { client } from "src/Api/client"

const LOGIN_MUTATION = gql`
  mutation mutationLogin($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`
const login = (variables: {
  email: string
  password: string
}): Promise<FetchResult> =>
  client.mutate({
    mutation: LOGIN_MUTATION,
    variables,
  })

export { login }
