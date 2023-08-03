import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../reduxToollkit/userSlice'

const Home = () => {
  useEffect(() => {
    getdata()
  }, [])
  
  let[udata,setUdata]=useState({fname:"user",lname:""})
  let[rdata,setRdata]=useState([])
  let dispatch = useDispatch()
  let data = useSelector((state)=>{return state.users}) || []
  let getdata =()=>{
    checkData()
  }
  let checkData =()=>{
    console.log(data.length)
    setUdata(data.length >0 ? data[0] : {fname:"user",lname:""}) 
    console.log('done')
  }
  return (
    <div>
      <button onClick={()=>getdata()}>get data</button>
      <h2> hi : {udata.fname} <span>{udata.lname}</span></h2>
    </div>
  )
}

export default Home
