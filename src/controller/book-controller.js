const { Book_Controller } = require('.');
const { Book_Service} = require('../service');
const ERROR_RESPONSE = require('../utils/common/error-response')

async function createBook(req,res) {
    const book =  await Book_Service.createBook(req.body);
    return res.json(book)
}
 async function getBook(req,res) {
   try {
    const book = await Book_Service.getBook(req.params.id);
    return res.json(book)
    
   } catch (error) {
    ERROR_RESPONSE.error = error;
    return res
             .status(error.statusCode)
             .json(ERROR_RESPONSE)

   }
 }
 async function getAllBooks(req,res) {
    const books = await Book_Service.getAllBooks();
    return res.json(books);
 }
 async function destroyBook(req,res) {
    const book = await Book_Service.destroyBook(req.params.id);
    return res.json(book)
 }

 async function updateBook(req,res) {
    const id = req.params.id;
    const data = req.body
    const book = await Book_Service.updateBook(data,id)
    return res.json(book);
 }

module.exports = {
    createBook,
    getBook,
    getAllBooks,
    destroyBook,
    updateBook
}