import React, { useContext, useState } from 'react'
import './Navbar.css';
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.png";
import basketIcon from "../../assets/basket_icon.png";
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import Card from '../../pages/Card/Card';
import { storeContext } from '../../Context/storeContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("Home");

    const {getTotalCartAmount} = useContext(storeContext);
  return (
    <div className='navbar'>
       <Link to='/'> <img src={logo} className='logo'/></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us</a>
        </ul>
        <div className='navbar-right'>
            <Link><img src={assets.search_icon}/></Link>
            <div className='navbar-search-icon'>
             <Link to='/card'><img src={assets.basket_icon}/></Link>
                <div className='dot'></div>
                {/* {getTotalCartAmount()===0?"":"dot"} */}
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar