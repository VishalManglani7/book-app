const typeDefs = `
  type User {
    _id: ID
    username: String
    password: String
    studentCount: Int
    classes: [Class]
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

  type Query {
    users: [User]
    books: [Book]
    reactions: [Reaction]
  }
`;

module.exports = typeDefs;
