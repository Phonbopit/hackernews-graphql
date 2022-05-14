import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefinitions = /* GraphQL */ `
  type Query {
    hello: String!

    users: [User!]!
    user(id: ID!): User

    info: String!
    feed: [Link!]!
  }

  type Mutation {
    createuser(name: String!): User!
  }

  type User {
    id: ID!
    name: String!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`

// 1
type Link = {
  id: string
  url: string
  description: string
}

const links: Link[] = [
  {
    id: 'id-1',
    url: 'https://graphql-yoga.com',
    description: 'GraphQL Server',
  },
  {
    id: 'id-2',
    url: 'https://github.com/',
    description: 'Github',
  },
]

const resolvers = {
  Query: {
    hello: () => `Ahoy!!`,
    info: () => `API of a Hackernews Clone`,
    feed: () => links,
  },

  Link: {
    id: (parent: Link) => parent.id,
    description: (parent: Link) => parent.description,
    url: (parent: Link) => parent.url,
  },
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
})
