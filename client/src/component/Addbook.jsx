import { Button } from '@mui/base'
import { Box, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Addbook = () => {
  const history = useNavigate()
   const [checked,setChecked] = useState(false)
    const [input,setInput]=useState({
        name:'',
        description:'',
        price:'',
        author:'',
        image:''
    })

   const sendRequest=async ()=>{ 
        await axios.post("http://localhost:8000/books",{
             name:String(input.name),
             author:String(input.author),
             description:String(input.description),
             price:String(input.price),
             image:String(input.image),
             available:Boolean(checked)
        }).then(res=>res.data)
   }

    // console.log(input)
    const handleChange=(e)=>{
      //  console.log(e.target.name,"value",e.target.value)
      setInput((prevValue)=>({
          ...prevValue,
          [e.target.name]:e.target.value
      }))
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
        console.log(input)
        sendRequest().then(()=>history('/books'))
    }
  return (
    <div>
       <form onSubmit={handleSubmit} >
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

            <Button type='submit' variant='contained' >Add Book</Button>
            </Box>
       </form>
    </div>
  )
}

export default Addbook
