const mongoose = require('mongoose') 
// dChqDjW9Pftj0AyB
const MONGO_DB_URI = 'mongodb+srv://jitenderkumarmukul:dChqDjW9Pftj0AyB@cluster0.hff1njr.mongodb.net/?retryWrites=true&w=majority'

const dbconnect = async ()=>{
     try{
         await mongoose.connect(MONGO_DB_URI)
         console.log('connect with database successfully')
     }
     catch(error) {
         console.error(error)
     }
}

module.exports = dbconnect


