import React, { useContext } from "react";
import './Navbar.css';
import { BsCart3, BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import myContext from '../context/MyContext';

const Navbar = () => {
  const context = useContext(myContext);
  console.log(context);
  const {mode,toggleMode}  = context;
  

  return (
    <div className="nav" style={{backgroundColor : mode==='dark' ? '#282c34' : ''}}>
      {/* logo  */}
      <Link to={"/"} style={{color:mode==='dark'? 'white' : ''}}>
        <div className="logo">
          <h1>E-Bharat</h1>
        </div>
      </Link>
      <div className="main-div">
          {/* pages  */}
        <div className="pages-div">
          <Link to={'/allproducts'} style={{color:mode==='dark'? 'white' : ''}}>All Products</Link>
          <Link to={'/order'} style={{color:mode==='dark'? 'white' : ''}}>Order</Link>
          <Link to={'/dashboard'} style={{color:mode==='dark'? 'white' : ''}}>Admin</Link>
          <a style={{color:mode==='dark'? 'white' : ''}}>Logout</a>
        </div>
        {/* theme btn  */}
        <div className="theme-btn">
           <button onClick={toggleMode} style={{border:'none', backgroundColor:'transparent' ,color:mode==='dark'? 'white' : ''}}>
               {
                mode==='light' ? (
                <FiSun style={{fontSize:'20px'}}/>
              ): 'dark' ?
             ( <BsFillCloudSunFill style={{fontSize:'20px'}}/>)
                : ''
               }
           </button>
        </div>
        {/* cart  */}
        <div>
           <Link to={'/cart'} style={{color:mode==='dark'? 'white' : ''}}> <BsCart3/></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
