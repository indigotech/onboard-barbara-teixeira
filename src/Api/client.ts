import { InMemoryCache, ApolloClient, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { AUTH_TOKEN } from "src/constants"

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: `${token}`,
    },
  }
})

const clientUrl = "https://tq-template-server-sample.herokuapp.com/graphql"
const httpLink = createHttpLink({ uri: clientUrl })

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export { client }
