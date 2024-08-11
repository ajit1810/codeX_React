import React from 'react'
import "./Footer.css";
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkden from '../../assets/linkedin_icon.png'




const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={logo}/>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nisi incidunt neque labore ex officiis minus, sunt eligendi enim officia.</p>
                <div className='footer-social-icons'>
                    <img src={facebook}/>
                    <img src={twitter}/>
                    <img src={linkden}/>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 8080565374</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>
            Copyright 2024 @Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer