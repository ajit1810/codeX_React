import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home';
import AddProduct from './Component/AddProduct';

const AllRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addProduct" element={<AddProduct/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes