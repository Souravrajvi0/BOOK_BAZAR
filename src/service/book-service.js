const { where } = require('sequelize');
const {Book_Repository} = require('../repository');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/error/app-error')

const book_Repository = new Book_Repository();
  async function createBook(data) {
    try {
       const book  =  await book_Repository.create(data);
       return book;
    } catch (error) {
      throw new AppError('Something went wrong while creating the book',StatusCodes.INTERNAL_SERVER_ERROR,'ERROR HAPPENED AT THE SERVR PART')
    }
  }

  async function getBook(id) {
    try {
    const book = await book_Repository.get(id)
    if(!book){
      throw new AppError('BOOK NOT FOUND',StatusCodes.BAD_REQUEST,'the book id does not exist');
    }
    return book;
      
    } catch (error) {
      if(error instanceof AppError){
        throw error
      }
      throw new AppError('Something went wrong while getting the book',StatusCodes.INTERNAL_SERVER_ERROR,'ERROR HAPPENED AT THE SERVR PART')
    }
  }

  async function getAllBooks() {
   try {
    const books = await book_Repository.getAll();
    return books;
   } catch (error) {
    throw new AppError('Something went Wrong while getting all the books',StatusCodes.INTERNAL_SERVER_ERROR,'Error Happened at the sever part');
   }
  }
  
  async function destroyBook(id) {
   try {
     const response = await book_Repository.destroy({
      where : {
        id : id 
      }
    });
    if(response==0){
     throw new AppError('BOOK NOT FOUND',StatusCodes.BAD_REQUEST,'The book id does not exist');
    }
    return response;
   } catch (error) {
    if(error instanceof AppError){
      throw error
    }
    throw new AppError('Something went Wrong while destroying',StatusCodes.INTERNAL_SERVER_ERROR,'Error Happened at the sever part');
   }
  }


  async function updateBook(data,id) {
    
    try {
      const  response = await book_Repository.update(data,{
      where : {
        id : id
      }
    });
    if(response==0){
     throw new AppError('BOOK NOT FOUND',StatusCodes.BAD_REQUEST,'The book id does not exist');
    }
    return response;
      
    } catch (error) {
      if(error instanceof AppError){
      throw error
    }
    throw new AppError('Something went Wrong while updating',StatusCodes.INTERNAL_SERVER_ERROR,'Error Happened at the sever part');
    }
  }

  module.exports = {
    createBook,
    getBook,
    getAllBooks,
    destroyBook,
    updateBook
  }
