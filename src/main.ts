import { execute, parse } from 'graphql'
import { schema } from './schema'

const main = async () => {
  const helloQuery = parse(/* GraphQL */ `
    query {
      hello
    }
  `)

  const response = await execute({
    schema,
    document: helloQuery,
  })

  console.log(`Response : ${JSON.stringify(response, null, 2)}`)
}

main()
