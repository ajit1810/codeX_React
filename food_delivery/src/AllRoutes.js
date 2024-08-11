
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card'
import PlaceOrder from './pages/PlaceOrderPage/PlaceOrder'

const AllRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Card" element={<Card/>}/>
            <Route path="/Order" element={<PlaceOrder/>}/>
        </Routes>
    </div>
  
  )
}

export default AllRoutes