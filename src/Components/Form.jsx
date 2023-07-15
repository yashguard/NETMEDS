import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <div>
            <form className='mt-3'>
                <label className='fw-600'>fname</label><input autoFocus placeholder='Enter your first name' type="text" />
                <label className='fw-600'>lname</label><input placeholder='Enter your last name ' type="text" />
                <label className='fw-600'>email</label><input placeholder='Enter your email' type="email" />
                <label className='fw-600'>password</label><input placeholder='Enter your password' type="password" />
                <label className='fw-600'>confirm-password</label><input placeholder='Rewrite your password' type="password" />
                <Link to="/login"><input type="submit" value="Signup" className='submit fw-500' /></Link>
            </form>
        </div>
    )
}

export default Form
