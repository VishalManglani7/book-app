// add resolvers for book and user

const { User, Book , Reaction } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
    Query: {
        //removing all users
        // user: async () => {
        //     return User.find().populate("booksRead");
        //   },

          // single user also removing this.
        // userbyUsername: async (parent, { username }) => {
        //     return User.findOne({ username }).populate("booksRead");
        //   },
         
         
          //I believe this should work to authenticate a single user who is signed on
          //then present the booksread by that particular user
          
        //   async (args, context) => commented this out as I dont think there are any args in this case?
        me: async ( context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate("booksRead");
            }
            throw AuthenticationError;
          },
        
        //all books
          books: async () => {
            return Book.find();
          },
        
        //single book
          bookbyID: async (parent, { _id  }) => {
            return Book.findOne({ _id  });
          },
        },

        Mutation: {
            //mutation to add a user/login
            addUser: async (parent, { username, email, password }) => {
              const user = await User.create({ username, email, password });
              const token = signToken(user);
              return { token, user };
            },
            login: async (parent, { email, password }) => {
              const user = await User.findOne({ email });

              const correctPw = await user.isCorrectPassword(password);
        
              if (!correctPw) {
                throw AuthenticationError;
              }
        
              const token = signToken(user);
        
              return { token, user };
            },
            
            //mutation to add a reaction
            //starting to consider removing the reactionBody with emojis for now
            //coded best I could as if it is there tho
            addReaction: async (parent, { bookID, reactionBody, rating}, context) => {
                if (context.user) {
                  const book = await Book.findOneAndUpdate({_id:bookID},{
                    $push:{reactions:{reactionBody, rating}}
                  });
          
                  // await User.findOneAndUpdate({ _id: context.user._id }, { $addToSet: { reaction: reaction._id } });
          
                  return book;
                }
                throw AuthenticationError;
              }}}

              module.exports = resolvers;