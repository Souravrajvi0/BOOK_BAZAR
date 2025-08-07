const { Book_Controller} = require('../../controller');
const express = require('express');
const router = express.Router();

router.post('/',Book_Controller.createBook);
router.get('/',Book_Controller.getAllBooks);
router.get('/:id',Book_Controller.getBook);
router.delete('/:id',Book_Controller.destroyBook);
router.put('/:id',Book_Controller.updateBook)


 
module.exports = router