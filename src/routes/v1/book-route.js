const { Book_Controller} = require('../../controller');
const express = require('express');
const router = express.Router();

router.post('/',Book_Controller.createBook);
 
module.exports = router