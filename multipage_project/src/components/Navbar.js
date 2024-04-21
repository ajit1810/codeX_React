import { Link } from 'react-router-dom';
import '../assets/style/Navbar.css';
function Navbar() {
    return(
        <div className="navbar">
            <ul className='nav'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/features'>Features</Link>
                </li>
                <li>
                    <Link to='/testimonials'>Testimonials</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;