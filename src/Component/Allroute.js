import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Medicine from './Medicine';
import Cart from './Cart';
import Signupsignin from './Signupsignin';
import Wellness from './Wellness';
import Offers from './Offers';
import Upload from './Upload';
import Labtest from './Labtest';
import Beauty from './Beauty';
import HealthCornar from './HealthCornar';

function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/medicine' element={<Medicine/>}/>
        <Route path='/wellness' element={<Wellness/>}/>
        <Route path='/Signupsignin' element={<Signupsignin/>}/>
        <Route path='/Offers' element={<Offers/>}/>
        <Route path='/Upload' element={<Upload/>}/>
        <Route path='/Labtest' element={<Labtest/>}/>
        <Route path='/Beauty' element={<Beauty/>}/>
        <Route path='/HealthCornar' element={<HealthCornar/>}/>

      </Routes>
    </div>
  )
}

export default AllRoute; 