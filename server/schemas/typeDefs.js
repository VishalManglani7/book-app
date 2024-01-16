const typeDefs = `
  type User {
    _id: ID
    username: String
    password: String
    booksRead: [Book]
  }

  type Book {
    _id: ID
    bookName: String
    bookAuthor: String
    reactions: [Reaction]
  }

  type Reaction {
    reactionId: ID
    reactionBody: String
    username: String
    rating: Int
    createdAt: String
  }
  
  type Auth{
    token:ID
    user:User
  }

  type Query {
    me: User
    books: [Book]
    bookbyID(_id:ID) : Book
  }

  type Mutation {
    addUser(username:String, email: String, password: String): Auth
    login(email:String, password:String): Auth
    addReaction(bookID:ID, username: String, reactionBody:String, rating: Int):Book
    addBook(userid:ID, bookName:String, bookAuthor:String):Book
  }
`;

module.exports = typeDefs;
