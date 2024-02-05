const express = require('express')
const router = express.Router()
const booksController = require('../controller/books_controller.js')

router.get('/',booksController.getAllBooks)
router.post('/',booksController.addBooks)
router.get('/:id',booksController.getById)
router.put('/:id',booksController.updateBook)
router.delete('/:id',booksController.bookDelete)

module.exports=router