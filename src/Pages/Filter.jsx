import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    console.log(searchParams.get('age'))
    console.log(searchParams.get('city'))
    const age = searchParams.get('age')
    const city = searchParams.get('city')
    let addAge =(e)=>{
        e.preventDefault()
        setSearchParams({city:city,age:18})
    }
    let add =(e)=>{
        e.preventDefault()
        let data = {...searchParams,gender:"male"}
        setSearchParams(data)
    }
  return (
    <div>
        <h1>filter page</h1>
        <h3>age is {age}</h3>
        <h3>city is {city}</h3>
        <input type="text" onChange={(e)=>setSearchParams({city:e.target.value,age:age})} placeholder='set city'/>
        <button onClick={(e)=>{addAge(e)}}>set age</button>
        <button onClick={(e)=>add(e)}>click</button>
    </div>
  )
}

export default Filter
