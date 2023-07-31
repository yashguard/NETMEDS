import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className='main-navigation'>
    <div className='menus'>
        <ul className='row'>
            <li className='row'>
                <div>
                    <img src='https://www.netmeds.com/assets/version1689008248/gloryweb/images/icons/medicine.svg'></img>
                </div>
                <Link to='/Medicine' className='color1'>Medicine</Link>
                <ol class="dropdown">
                    <li>
                        <a href="#">All medicines</a>
                    </li>
                    <li>
                        <a href="#">Buy Again</a>
                    </li>
                </ol>
            </li>
            <li className='row'>
                <div>
                    <img src='https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg'></img>
                </div>
                <Link to='/Wellness' className='color1'>Wellness</Link>
                <a></a>
                <div class="mega-menu">
                    <div class="row">
                        <div class="w-20">
                            <div class="w-100">
                                <ul>
                                    <li>
                                        <a href="#"><h4>Ayush</h4></a>
                                    </li>
                                    <li>
                                        <a href="#">Ayurvedic</a>
                                    </li>
                                    <li>
                                        <a href="#">Unani</a>
                                    </li>
                                    <li>
                                        <a href="#">Homeopathy</a>
                                    </li>
                                    <li>
                                        <a href="#">Siddha</a>
                                    </li>
                                    <li>
                                        <a href="#"><h4>Covid Essentials</h4></a>
                                    </li>
                                    <li>
                                        <a>Oxygen Can </a>
                                    </li>
                                    <li>
                                        <a>Personal & Home Essentials</a>
                                    </li>
                                    <li>
                                        <a>Business Essentials </a>
                                    </li>
                                    <li>
                                        <a>Mask, Gloves &
                                            Protective Equipment </a>
                                    </li>
                                    <li>
                                        <a>Travel Essentials </a>
                                    </li>
                                    <li>
                                        <a href="#"><h4>Devices</h4></a>
                                    </li>
                                    <li>
                                        <a>Breathe Easy</a>
                                    </li>
                                    <li>
                                        <a>Surgical Accessories</a>
                                    </li>
                                    <li>
                                        <a>Measurements </a>
                                    </li>
                                    <li>
                                        <a>Orthopaedics </a>
                                    </li>
                                    <li>
                                        <a>Travel Essentials </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="w-20">
                            <div class="w-100">
                                <ul>
                                    <li>
                                        <a href="#"><h4>Diabetes Support</h4></a>
                                    </li>
                                    <li>
                                        <a href="#">Glucometers</a>
                                    </li>
                                    <li>
                                        <a href="#">Sugar Substitutes</a>
                                    </li>
                                    <li>
                                        <a href="#">Diabetes Management Supplements</a>
                                    </li>
                                    <li>
                                        <a href="#">Diabetes Care Ayurveda</a>
                                    </li>
                                    <li>
                                        <a href="#">Lancets & Test Strips</a>
                                    </li>
                                    <li>
                                        <a href="#"><h4>Eyewear</h4></a>
                                    </li>
                                    <li>
                                        <a href="#">Computer Glasses</a>
                                    </li>
                                    <li>
                                        <a href="#">Eye Glasses</a>
                                    </li>
                                    <li>
                                        <a href="#">Sunglasses</a>
                                    </li>
                                    <li>
                                        <a href="#">Reading Glasses</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Lenses (EW)</a>
                                    </li>
                                    <li>
                                        <a href="#"><h4>Fitness</h4></a>
                                    </li>
                                    <li>
                                        <a href="#">Weight Management</a>
                                    </li>
                                    <li>
                                        <a href="#">Sports Supplements</a>
                                    </li>
                                    <li>
                                        <a href="#">Smoking Cessation</a>
                                    </li>
                                    <li>
                                        <a href="#">Supplements</a>
                                    </li>
                                    <li>
                                        <a href="#">Family Nutrition</a>
                                    </li>
                                    <li>
                                        <a href="#">Health Food And Drinks</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="w-20">
                            <div class="w-100">
                                <ul>
                                    <li>
                                        <a href="#"><h4>Health Conditions</h4></a>
                                    </li>
                                    <li>
                                        <a href="#">Women's Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Bone And Joint Pain</a>
                                    </li>
                                    <li>
                                        <a href="#">Liver Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Piles Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Weight Care (EW)</a>
                                    </li>
                                    <li>
                                        <a href="#">Stomach Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Mental Care</a>
                                    </li>
                                    <li>
                                        <a href="#">De-Addiction</a>
                                    </li>
                                    <li>
                                        <a href="#">Diabetic Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Cardiac Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Cold And Fever</a>
                                    </li>
                                    <li>
                                        <a href="#">Immunity Care</a>
                                    </li>
                                
                                    <li>
                                        <a href="#"><h4>Mom & Baby</h4></a>
                                    </li>
                                    <li>
                                        <a href="#">Baby Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Feminine Hygiene</a>
                                    </li>
                                    <li>
                                        <a href="#"><h4>Maternity Care</h4></a>
                                    </li>
                                    <li>
                                        <a href="#">Baby Bath Time</a>
                                    </li>
                                    <li>
                                        <a href="#">Toys & Games</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-20">
                            <div class="w-100">
                                <ul>
                                    <li>
                                        <a href="#"><h4>Personal Care</h4></a>
                                    </li>
                                    <li>
                                        <a href="#">Home & Health</a>
                                    </li>
                                    <li>
                                        <a href="#">Senior Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Face Personal Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Hands & Feet</a>
                                    </li>
                                    <li>
                                        <a href="#">Oral Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Bath & Shower</a>
                                    </li>
                                    <li>
                                        <a href="#">Body Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Personal Care Tools & Accessories</a>
                                    </li>
                                    <li>
                                        <a href="#">Lip Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Bathing Accessories</a>
                                    </li>
                                    <li>
                                        <a href="#"><h4>Sexual Wellness</h4></a>
                                    </li>
                                    <li>
                                        <a href="#">Condoms</a>
                                    </li>
                                    <li>
                                        <a href="#">Massagers/Vibrators</a>
                                    </li>
                                    <li>
                                        <a href="#">Sexual Health Supplements</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-20">
                            <div class="w-100">
                                <ul>
                                    <li>
                                        <a href="#"><h4>Surgical</h4></a>
                                    </li>
                                    <li>
                                        <a href="#">Respiratory Supplies</a>
                                    </li>
                                    <li>
                                        <a href="#">Surgical Consumables</a>
                                    </li>
                                    <li>
                                        <a href="#">Iv Infusion</a>
                                    </li>
                                    <li>
                                        <a href="#">Surgical Instrument</a>
                                    </li>
                                    <li>
                                        <a href="#">Dressing</a>
                                    </li>
                                    <li>
                                        <a href="#">Gi Care</a>
                                    </li>
                                    <li>
                                        <a href='#'>Urinary Care</a>
                                    </li>
                                    <li>
                                        <a href='#'>Wound Treatment</a>
                                    </li>
                                    <li>
                                        <a href="#"><h4>Veterinary</h4></a>
                                    </li>
                                    <li>
                                        <a href="#">Petcare</a>
                                    </li>
                                    <li>
                                        <a href="#">Farm Animals</a>
                                    </li>
                                    <li>
                                        <a href="#">Aquaculture</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li className='row'>
                <div>
                    <img src='https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg'></img>
                </div>
                <Link to='/LabTest' className='color1'>Lab Test</Link>
                <a></a>
            </li>

            <li className='row'>
                <div>
                    <img src='https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg'></img>
                </div>
                <Link to='/Beauty' className='color1'>Beauty</Link>
            </li>

            <li className='row'>
                <div>
                    <img src='https://www.netmeds.com/assets/version1689008248/gloryweb/images/icons/health-library.svg'></img>
                </div>
                <Link to='/HealthCornar' className='color1'>Health Cornar</Link>
                <ol class="dropdown">
                    <li>
                        <a href="#">Health Library</a>
                    </li>
                    <li>
                        <a href="#">Patientsalike</a>
                    </li>
                    <li>
                        <a href="#">Corona-Awareness</a>
                    </li>
                </ol>
            </li>

        </ul>

    </div>

</div>
  )
}

