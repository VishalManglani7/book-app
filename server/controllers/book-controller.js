const { User, Book } = require('../models');

module.exports = {
 async addReaction({body}, res){
    const foundUser = await User.findOne({
        $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
      });
  
      if (!foundUser) {
        return res.status(400).json({ message: 'Cannot find a user with this id!' });
      }
    const foundBook = await Book.findById(bookId);
    if(!foundBook) {
        return res.status(400).json({ message: 'Cannot find a book with this id!' });
    }
    foundBook.reactions.push({
        user: user.username,
        reaction: reaction,
      });
      //save updated book with reaction
      const updatedBook = await foundBook.save();
      return res.json(updatedBook);

 }   
}