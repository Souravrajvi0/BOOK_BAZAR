const CRUD_REPOSITORY = require('./crud-repository');
const {Book} = require('../models')

class Book_Repository extends CRUD_REPOSITORY {
    constructor(){
        super(Book)
    }
}

module.exports = Book_Repository