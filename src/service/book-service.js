const { where } = require('sequelize');
const {Book_Repository} = require('../repository');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/error/app-error')

const book_Repository = new Book_Repository();


  async function createBook(data) {
    const book  =  await book_Repository.create(data);
    return book;
  }

  async function getBook(id) {
    try {
    const book = await book_Repository.get(id)
    if(!book){
      throw new AppError('Something Went Wrong',StatusCodes.BAD_REQUEST,'the book id does not exist');
    }
    return book;
      
    } catch (error) {
      if(error instanceof AppError){
        throw error
      }
      throw error
    }
  }

  async function getAllBooks() {
    const books = await book_Repository.getAll();
    return books;
  }
  
  async function destroyBook(id) {
    const  book = await book_Repository.destroy({
      where : {
        id : id 
      }
    });
    return book;
  }
  async function updateBook(data,id) {
    
    const  book = await book_Repository.update(data,{
      where : {
        id : id
      }
    });
    return book;
  }





  module.exports = {
    createBook,
    getBook,
    getAllBooks,
    destroyBook,
    updateBook
  }
