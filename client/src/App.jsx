import React from 'react'
import Header from './component/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Addbook from './component/Addbook'
import Books from './component/Book/Books'
import BookDetails from './component/Book/BookDetails'

const App = () => {
  return (
    <div>
        <header>
        <Header/>
        </header>
        <main>
            <Routes>
                <Route path='/' element={<Home/>} exact />
                <Route path='/aboutus' element={<About/>} exact />
                <Route path='/add' element={<Addbook/>} exact/>
                <Route path='/books' element={<Books/>} exact/>
                <Route path='/books/:id' element={<BookDetails/>} exact />
            </Routes>
        </main>
    </div>
  )
}

export default App
