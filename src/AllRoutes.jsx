import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Product from './Pages/Product'
import SignIn from './Components/SignIn'
import Cart from './Pages/Cart'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
