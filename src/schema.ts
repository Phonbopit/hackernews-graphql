import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefinitions = /* GraphQL */ `
  type Query {
    hello: String!

    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createuser(name: String!): User!
  }

  type user {
    id: ID!
    name: String!
  }
`

const resolvers = {
  Query: {
    hello: () => `Ahoy!!`,
  },
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
})
