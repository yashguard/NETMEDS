import React, { useEffect } from 'react'
import SignIn from '../Components/SignIn'
import { emailauth } from '../Components/Config'

const Login = () => {
  useEffect(() => {
    emailauth().then((res) => {console.log(res)});
  }, [])
  return (
    <div>
      <SignIn title='Sign in' des='Sign up or Sign in to access your orders, special offers, health tips and more!'/>
    </div>
  )
}

export default Login
