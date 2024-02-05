const express = require('express')
const app = express()
const dbconnect = require('./db/db.js')
const PORT = 8000
const cors = require('cors')
const router = require('./routes/routes.js')
app.use(cors())
app.use(express.json())
app.use('/books',router)

dbconnect().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server connected successfully")
   })
})