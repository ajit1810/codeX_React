
import { useState } from 'react';
import './Navbar.css';

function Navbar() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
  

    
    return(
        <div className="nav">
                <div className="logo">
                    <h1>Ajit Mane</h1>
                </div>
               
            
                <div className={`navbar ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#services'>Services</a>
                        </li>
                        <li>
                            <a href='#about'>About me</a>
                        </li>
                        <li>
                            <a href='#project'>Projects</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
              
                <button id="btn" className="drawer-toggle" onClick={toggleDrawer}>
                ☰ 
            </button>
        </div>
    );
    
}

export default Navbar;