const { Book_Service} = require('../service');

async function createBook(req,res) {
    const book =  await Book_Service.createBook(req.body);
    return res.json(book)
}

module.exports = {
    createBook
}