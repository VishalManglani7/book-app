const { Schema, model } = require('mongoose');
const bookSchema = require('./Book');

// Schema to create username model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //look into Mongoose matching validation, must match valid email
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    booksRead: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'}
    ],
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'User'}
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  });


const User = model('User', userSchema);

module.exports = User;