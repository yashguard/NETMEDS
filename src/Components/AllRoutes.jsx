import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import Product from './Product'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product' element={<Product/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
