import React from 'react'
import {Button} from '@mui/material'
import '../Style/Book.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Book = (props) => {
    // console.log(props)
    const history = useNavigate()
    const {_id,name,author,description,price,image} = props.book
    const deletehandler= async ()=>{
        await axios.delete(`http://localhost:8000/books/${_id}`)
        .then(res=>res.data).then(()=>history('/books'))
    }
  return (  
    <div className='card' >
         <img className='img-photo' src={image} alt="/img-book" />
         <article>By {author}</article>
         <h3>{name}</h3>
         <p>{description}</p>
         <h2>Rs {price}</h2>
         <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}} >Update</Button>
         <Button onClick={deletehandler} sx={{mt:'auto'}}>Delete</Button>
    </div>
  )
}

export default Book
