import './Navbar.css';

function Navbar() {
    return(
        <div className="nav">
                <div className="logo">
                    <h1>Ajit Mane</h1>
                </div>
                <div className="navbar">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About me</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <button id='btn'>Hire me</button>
        </div>
    );
    
}

export default Navbar;