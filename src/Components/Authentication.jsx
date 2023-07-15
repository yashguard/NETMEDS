import React from 'react'
import { googleauth } from './Config';
import { useDispatch } from 'react-redux';
import { addEmail } from '../Redux/Action';

const Authentication = () => {
    let dispatchEmail = useDispatch()
  const handleGoogle = () => {
    googleauth().then((userdetails) => {
        // console.log(userdetails._tokenResponse.email)
        dispatchEmail(addEmail(userdetails._tokenResponse.email))
    });
  };
    return (
        <div>
            <h4 className='fw-600'>Or</h4>
            <div className="different-auth row">
                <div className='col-lg-6 col-xl-6 col-xxl-6'>
                    <button onClick={handleGoogle} className='row align-item-center'>
                        <img src="./Image/google-icon.png" alt="google" /><span>Google</span>
                    </button>
                </div>
                <div className='col-lg-6 col-xl-6 col-xxl-6'>
                    <button className='row align-item-center'>
                        <img src="./Image/facebook-icon.png" alt="google" /><span>Facebook</span>
                    </button>
                </div>
                <div className='col-lg-6 col-xl-6 col-xxl-6'>
                    <button className='row align-item-center'>
                        <img src="./Image/email-icon.png" alt="google" /><span>Email</span>
                    </button>
                </div>
                <div className='col-lg-6 col-xl-6 col-xxl-6'>
                    <button className='row align-item-center'>
                        <img src="./Image/github-icon.png" alt="google" /><span>Github</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Authentication
