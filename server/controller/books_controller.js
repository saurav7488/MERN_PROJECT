const Book = require('../models/Book.js') 

const getAllBooks = async (req,res) =>{
    let books;
    try{
       books = await Book.find()
    }
    catch(error) {
       console.error(error)
    }
    if(!books) {
       return res.status(404).json({msg:'No product found'})
    }
    else{
       return res.status(200).json({books})
    }
}

const addBooks = async (req,res)=>{
     const {name,author,description,price,available,image} = req.body
     let books;
     try{
        books = new Book({
            name,author,description,price,available,image
        })
        books = await books.save()
     }
     catch (error) {
         console.log(error)
     }
     if(!books) {
         res.status(404).json({msg:'Books is not uploaded'})
     }
     else{
         return res.status(200).json({books})
     }
}

const getById = async (req,res) =>{
     const id = req.params.id
     let books;
     try{
         books = await Book.findById(id)
     }
     catch(error) {
         console.error(error)
     }
     if(!id) {
         res.status(404).json({msg:'Book not found'})
     }
     return res.status(200).json({books})
}

const updateBook = async (req,res)=>{
     let id = req.params.id 
     let books;
     const {name,author,description,price,available,image} = req.body
     try{
        books = await Book.findByIdAndUpdate(id,{
            name,author,description,price,available,image
        })
        await books.save()
     }
     catch(error){
         console.log(error)
     }
     if(!books) {
        res.status(404).json({msg:'Books is not update'})
    }
    else{
        return res.status(200).json({msg:"Books update successfully"})
    }
}

const bookDelete = async(req,res) =>{
     let books;
     let id = req.params.id 
     try{
         books = await Book.findByIdAndDelete(id)
     }
     catch(error) {
         console.error(error)
     }
     if(!books) {
        res.status(404).json({msg:'Books is not delete'})
    }
    else{
        return res.status(200).json({msg:"Books delete successfully"})
    }
}


exports.bookDelete=bookDelete
exports.getAllBooks=getAllBooks
exports.addBooks=addBooks
exports.getById=getById
exports.updateBook=updateBook