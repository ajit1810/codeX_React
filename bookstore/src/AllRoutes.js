import React from 'react'

import { Routes, Route } from 'react-router-dom'
import BookForm from './Components/BookForm'
import Booklist from './Components/Booklist'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<BookForm/>}/>
            <Route path="/booklist" element={<Booklist/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes