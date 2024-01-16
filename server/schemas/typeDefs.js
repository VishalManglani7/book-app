const typeDefs = `
  type User {
    _id: ID
    username: String
    password: String
    bookList: [Book]
  }

  type Book {
    _id: ID
    bookName: String
    bookAuthor: String
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    username: String
    rating: Number
    createdAt: Date
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    books: [Book]
    bookbyId(_id: ID!) : Book
    reactions: [Reaction]
  }

  type Mutation { 
    addUser(username: String!, email: String!, password: String!): Auth 
    login(email: String!, password: String!) : Auth
    addReaction (reactionBody: String!, rating: Int!, createdAt: Date!) : Reaction 
  }
`;

module.exports = typeDefs;
