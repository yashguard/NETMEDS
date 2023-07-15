import React from 'react'
import FirstImage from './FirstImage'
import { Link } from 'react-router-dom'

const Signup = (props) => {
  return (
    <div className="vh-100 row align-item-center bg-light-gray">
      <div className="signup-box me-auto mt-2">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <FirstImage />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-5">
            <h2 className="title-color fw-500">{props.title}</h2>
            <p className="p">{props.des}</p>
            <form className='mt-3'>
                <label className='fw-600'>fname</label><input autoFocus placeholder='Enter your first name' type="text" />
                <label className='fw-600'>lname</label><input placeholder='Enter your last name ' type="text" />
                <label className='fw-600'>email</label><input placeholder='Enter your email' type="email" />
                <label className='fw-600'>password</label><input placeholder='Enter your password' type="password" />
                <label className='fw-600'>confirm-password</label><input placeholder='Rewrite your password' type="password" />
                <Link to="/login"><input type="submit" value="Signup" className='submit fw-500' /></Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
