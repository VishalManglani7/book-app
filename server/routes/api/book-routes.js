const router = require('express').Router();
const {
  addReaction,
} = require('../../controllers/book-controller');

// import middleware ?? **
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/books/:bookId').post(authMiddleware, addReaction);


module.exports = router;
