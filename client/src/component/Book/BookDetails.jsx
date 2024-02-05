import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookDetails = () => {
  const history=useNavigate()
   const [checked,setChecked] = useState(false)
   const id = useParams().id
   const [input,setInput] = useState({
    // name:'',
    // description:'',
    // price:'',
    // author:'',
    // image:''
   })
  //  console.log(id)
  const sendRequest=async ()=>{
     await axios.put(`http://localhost:8000/books/${id}`,{
      name:String(input.name),
      author:String(input.author),
      description:String(input.description),
      price:String(input.price),
      image:String(input.image),
      available:Boolean(checked)
     }).then(res=>res.data)
  }
    useEffect(()=>{
        const fetchHandler= async ()=>{
            await axios.get(`http://localhost:8000/books/${id}`).then(res=>res.data)
            .then(data=>setInput(data.books))
        }
        fetchHandler()
    },[id])
    console.log(input)
    const handleSubmit=(e)=>{
        e.preventDefault()
        sendRequest().then(()=>history('/books'))
    }
    const handleChange=(e)=>{
      setInput((prevValue)=>({
        ...prevValue,
        [e.target.name]:e.target.value
    }))
    }
  return (
    <div>
        { input &&  <form onSubmit={handleSubmit} >
            <Box display="flex" flexDirection="column" maxWidth={700} 
              marginLeft={'auto'} marginRight={'auto'}
            marginTop={5} >
            <FormLabel>Name</FormLabel>
            <TextField value={input.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name' />
            <FormLabel>Author</FormLabel>
            <TextField value={input.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author' />
            <FormLabel>Description</FormLabel>
            <TextField value={input.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description' />
            <FormLabel>Price</FormLabel>
            <TextField value={input.value} onChange={handleChange} type='number' margin='normal' fullWidth variant='outlined' name='price' />
            <FormLabel>Image</FormLabel>
            <TextField value={input.image} onChange={handleChange} type='text' margin='normal' fullWidth variant='outlined' name='image' />
            <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}  />} label="available" />

            <Button type='submit' variant='contained' >Update Book</Button>
            </Box>
       </form>}
     </div>
  )
}

export default BookDetails
