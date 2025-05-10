const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
    type Query {
        hello: String
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
    }
`

const resolvers = {
    Query: {
        hello: () => {
            "Hello world!!"
        },
        numberOfAnimals: () => {
            return 5
        },
        price: () => {
            return 19.99
        },
        isCool: () => {
            return true
        },
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server is ready at ${url}`)
})