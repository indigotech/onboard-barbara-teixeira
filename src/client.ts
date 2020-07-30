import { InMemoryCache, ApolloClient } from "@apollo/client"

const clientUrl = "https://tq-template-server-sample.herokuapp.com/graphql"

const client = new ApolloClient({
  uri: clientUrl,
  cache: new InMemoryCache(),
})

export { client }
