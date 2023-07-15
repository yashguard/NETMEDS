import React from 'react'

const Authentication = () => {
    return (
        <div>
            <h4 className='fw-600'>Or</h4>
            <div className="different-auth row">
                <div className='col-lg-6 col-xl-6 col-xxl-6'>
                    <button className='row align-item-center'>
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
