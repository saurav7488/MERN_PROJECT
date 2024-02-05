import React, { useEffect, useState } from 'react';
import Book from './Book';
import '../Style/Book.css'

const URL = 'http://localhost:8000/books';


const Books = () => {
  const [books, setBooks] = useState([]); // Initialize with an empty array

  useEffect(()=>{
       fetch(URL).then(res=>res.json()).then((data)=>setBooks(data))
  },[])

  // console.log(books);

  return (
    <div>
        <ul>
        {books.books &&
        books.books.map((book, i) => (
           <li>
           <Book className='book' key={i} book={book} />
           </li>
        ))}
        </ul>
    </div>
  );
};

export default Books;