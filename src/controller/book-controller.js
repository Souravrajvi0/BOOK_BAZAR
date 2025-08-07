const { StatusCodes } = require('http-status-codes');
const { Book_Controller } = require('.');
const { Book_Service} = require('../service');
const {SUCCESS_RESPONSE,ERROR_RESPONSE} = require('../utils/common');

async function createBook(req,res) {
   try {
    const book =  await Book_Service.createBook(req.body);
    SUCCESS_RESPONSE.data = book;
    return res.status(StatusCodes.ACCEPTED).json(SUCCESS_RESPONSE);  
   } catch (error) {
    ERROR_RESPONSE.error = error;
    return res.status(error.statusCode).json(ERROR_RESPONSE);
   }
}
 async function getBook(req,res) {
   try {
    const book = await Book_Service.getBook(req.params.id);
    SUCCESS_RESPONSE.data = book;
    return res.status(StatusCodes.ACCEPTED).json(SUCCESS_RESPONSE);
   } catch (error) {
    ERROR_RESPONSE.error = error;
    return res.status(error.statusCode).json(ERROR_RESPONSE);
   }
 }
 async function getAllBooks(req,res) {
    try {
    const books = await Book_Service.getAllBooks();
    SUCCESS_RESPONSE.data = books;
    return res.status(StatusCodes.ACCEPTED).json(SUCCESS_RESPONSE);
    } catch (error) {
      ERROR_RESPONSE.error = error;
      return res.status(error.statusCode).json(ERROR_RESPONSE);
    }

 }
 async function destroyBook(req,res) {
try {
   const book = await Book_Service.destroyBook(req.params.id);
   SUCCESS_RESPONSE.data = book;
   return res.status(StatusCodes.ACCEPTED).json(SUCCESS_RESPONSE);
} catch (error) {
   ERROR_RESPONSE.error = error;
   return res.status(error.statusCode).json(ERROR_RESPONSE);
} }

 async function updateBook(req,res) {
    try {
    const id = req.params.id;
    const data = req.body;
    const book = await Book_Service.updateBook(data,id);
    SUCCESS_RESPONSE.data = book;
    return res.status(StatusCodes.ACCEPTED).json(SUCCESS_RESPONSE);

    } catch (error) {
    ERROR_RESPONSE.error = error;
    return res.status(error.statusCode).json(ERROR_RESPONSE);
      
    }
 }

module.exports = {
    createBook,
    getBook,
    getAllBooks,
    destroyBook,
    updateBook
}