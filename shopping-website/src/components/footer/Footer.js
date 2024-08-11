import React, { useContext } from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import myContext from '../context/MyContext';

const Footer = () => {
  const context = useContext(myContext);
  const{mode} = context;
  return (
    <div className='footer' style={{color:mode==='dark'? 'white':'',backgroundColor:mode==='dark'?'#2e3137':''}}>
        <div className='footer-div' >
          <h2>CATEGORIES</h2>
          <p style={{color:mode==='dark'? 'white':''}}>Home</p>
          <Link to={'/order'} style={{color:mode==='dark'? 'white':''}}>Order</Link>
          <p style={{color:mode==='dark'? 'white':''}}>Local For Vocal</p>
          <Link to={'/cart'} style={{color:mode==='dark'? 'white':''}}>Cart</Link>
        </div>
        <div className='footer-div'>
          <h2>Customer Service</h2>
          <p style={{color:mode==='dark'? 'white':''}}>Return Policy</p>
          <p style={{color:mode==='dark'? 'white':''}}>About</p>
          <p style={{color:mode==='dark'? 'white':''}}>Contact Us</p>
          
        </div>
        <div className='footer-div'>
          <h2>Services</h2>
          <p style={{color:mode==='dark'? 'white':''}}>Privacy</p>
          
        </div>
        <div className='footer-div-img'>
            <img src='https://ecommerce-sk.vercel.app/pay.png' alt='not found'/>
        </div>
    </div>
  )
}

export default Footer