import './Header.css';
import logo from'../assets/logo.png'
function Header() {
    return (
        <div id="header">
            <ul className="navbar">
            <img src={logo}></img>
                <li>Home</li>
                <li>Features</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Header;