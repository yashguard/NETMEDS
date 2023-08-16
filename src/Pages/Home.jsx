import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Home = () => {
  let[udata,setUdata]=useState({fname:"user",lname:''})
  let[rdata,setRdata]=useState([])
  let nav = useNavigate()
  let id = JSON.parse(localStorage.getItem('id'))

  
  // let data = useSelector((state)=>{return state.users}) || []
  let getdata =()=>{
    axios.get(`http://localhost:8010/users/${id}`).then((res)=>setUdata(id ? res.data : {fname:"user",lname:''}))
  }
  useEffect(() => {
    getdata()
  }, [])
  
  return (
    <div>
      <h2> <span style={{fontSize:'18px'}}>hi </span> {udata.fname} {udata.lname}</h2>
      <button onClick={()=>nav('/product')}>products</button>
    </div>
  )
}

export default Home
