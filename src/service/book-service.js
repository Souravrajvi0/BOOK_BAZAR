const {Book_Repository} = require('../repository');

const book_Repository = new Book_Repository();


  async function createBook(data) {
    console.log(data);
    const book  =  await book_Repository.create(data);
    return book;
  }



  module.exports = {
    createBook
  }
