import React from 'react'
import { Star, StarFill, StarHalf } from 'react-bootstrap-icons'

const Rating=({value,text})=> {
  return (
    <div className='rating' style={{color:'#FDBE1E'}}>
        <span style={{padding:"0 2px"}}>
            {value>=1 ? <StarFill style={{fontSize:'1.5rem'}}/>:value>=0.5?<StarHalf/>:<Star/>}
        </span>
        <span style={{padding:"0 2px"}}>
            {value>=2 ? <StarFill style={{fontSize:'1.5rem'}}/>:value>=1.5?<StarHalf/>:<Star/>}
        </span>
        <span style={{padding:"0 2px"}}>
           {value>=3 ? <StarFill style={{fontSize:'1.5rem'}}/>:value>=2.5?<StarHalf/>:<Star/>}
        </span>
        <span style={{padding:"0 2px"}}>
            {value>=4 ? <StarFill style={{fontSize:'1.5rem'}}/>:value>=3.5?<StarHalf/>:<Star/>}
        </span>
        <span style={{padding:"0 2px"}}>
            {value>=5 ? <StarFill style={{fontSize:'1.5rem'}}/>:value>=4.5?<StarHalf/>:<Star/>}
        </span>
        <span style={{padding:"0 2px"}} className='ms-2'>
            {text}
        </span>
    </div>
  )
}

export default Rating
