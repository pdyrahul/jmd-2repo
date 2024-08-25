import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImg from '../assets/logoImg.png';
import { BiUser,BiAlignRight } from "react-icons/bi";
import Button from '@mui/material/Button';
const Header = () => (
  <section className='topHeader'>
  <div className='container'>
    <header>
      <div className="logo">
        <a href=""><img src={logoImg} alt="Logo" className="img-fluid" /></a>
      </div>
      <nav>
        <ul className='list-unstyled d-flex mb-0'>
          <li className='mx-2'><a href="#">Car Tyres</a></li>
          <li className='mx-2'><a href="#">Bike Tyres</a></li>
          <li className='mx-2'><a href="#">Tyre Pressure</a></li>
          <li className='mx-2'><a href="#">Commercial Tyres</a></li>
          <li className='mx-2'><a href="#">Accessories</a></li>
          <li className='mx-2'><a href="#">More</a></li>
        </ul>
        
      </nav>
      <div className="user_log">
      <BiUser size={20} /><span><Button variant="contained">Login</Button></span>
      </div>
      <BiAlignRight  className='toggleMenu' size={30}/>
    </header>
  </div>
  </section>
);

export default Header;
