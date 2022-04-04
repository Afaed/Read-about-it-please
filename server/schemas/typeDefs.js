const { gql } = require('apollo-server-express')
//type defs to define me, mutations, and saveBook
const typeDefs = gql`
type User {
    _id: ID
    username: String
    password: String
    bookCount: Int
    savedBook: [Book]
}  
type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
input saveBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
}

type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: saveBook!): User
    removeBook(bookId: ID!): User
  }

type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;