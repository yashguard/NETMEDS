import React from 'react'
import { Link } from 'react-router-dom'

const TopPartHeader = () => {
  let localid = JSON.parse(localStorage.getItem("id"))
  let photoUrl = JSON.parse(localStorage.getItem('photoUrl'))
  // console.log(localid)
  return (
    <div className="header">
      <div className="section-page-1">
        <div className="main-section-page-1">
          <nav className="flex">
            <div className="logo">
              <img src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg"></img>
            </div>
            <div className="search-bar">
              <div className="block-search">
                <div class="search-container">
                  <input
                    type="text"
                    placeholder="Search for medicine & wellness products..."
                    class="search-bar"
                  />
                </div>
              </div>
            </div>
            <div className="iocon-box">
              <div className="texte">
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg"></img>
              </div>
              <Link to="/upload" className="color1">
                Upload
              </Link>
              <a className="color"></a>
            </div>
            <div className="iocon-box">
              <div className="texte">
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/offers_icon.svg"></img>
              </div>
              <Link to="/offers" className="color1">
                Offers
              </Link>
              <a className="color"></a>
            </div>
            <div className="iocon-box">
              <div className="texte">
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/cart_icon.svg"></img>
              </div>
              <Link to="/cart" className="color1">
                Cart
              </Link>
            </div>
            <div className="iocon-box">
              <div className="texte">
                <img style={localid != undefined ? {display:'none'}:{display:'block'}} src="https://www.netmeds.com/assets/gloryweb/images/icons/profile_icon.svg"></img>
              </div>
              <Link to="/login" className="color1">
                {localid != undefined ? <img style={{width:"4rem",borderRadius:'50px',border:"1px solid black"}} src={photoUrl} alt="" srcset="" /> :'Sign in / Sign up'}
              </Link>
              <a className="color"></a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default TopPartHeader
