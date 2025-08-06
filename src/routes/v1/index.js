const express = require("express");
const router = express.Router();
const book_Routes = require('./book-route')
router.use('/books',book_Routes);

module.exports = router