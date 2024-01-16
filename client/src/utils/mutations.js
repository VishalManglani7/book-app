import {gql} from "@apollo/client"

export const ADD_USER = gql`
mutation AddUser($username: String, $email: String, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        password
        booksRead {
          _id
          bookName
          bookAuthor
          reactions {
            reactionId
            reactionBody
            username
            rating
            createdAt
          }
        }
      }
    }
  }
`

export const LOGIN = gql`
mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        password
        booksRead {
          _id
          bookName
          bookAuthor
          reactions {
            reactionId
            reactionBody
            username
            rating
            createdAt
          }
        }
      }
    }
  }
`

export const ADDBOOK = gql`
mutation AddBook($userid: ID, $bookName: String, $bookAuthor: String) {
    addBook(userid: $userid, bookName: $bookName, bookAuthor: $bookAuthor) {
      _id
      bookName
      bookAuthor
      reactions {
        reactionId
        reactionBody
        username
        rating
        createdAt
      }
    }
  }
  `

  export const ADDREACTION =gql`
  mutation AddReaction($bookId: ID, $username: String, $reactionBody: String, $rating: Int) {
    addReaction(bookID: $bookId, username: $username, reactionBody: $reactionBody, rating: $rating) {
      _id
      bookName
      bookAuthor
      reactions {
        reactionId
        reactionBody
        username
        rating
        createdAt
      }
    }
  }
  `