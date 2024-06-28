import React from 'react';
import "./Navbar.css";
function Navbar() {
    return(
        <div className='navbar'>
            <ul>
                <h1>Bookstore</h1>
                <li>Home</li>
                <li>BookList</li>
            </ul>
        </div>
    );
}

export default Navbar;