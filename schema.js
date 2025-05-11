const { gql } = require("apollo-server");

exports.typeDefs = gql`
    type Query {
        hello: [String]!
        products: [Product!]!
        product(id: ID!): Product!
        categories: [Category!]!
        category(id: ID!): Category!
        reviews: [Review!]!
        review(id: ID!): Review!
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        categoryId: ID!
        category: Category!
        reviews: [Review]
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: ID!
        product: Product!
    }
`