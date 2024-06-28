import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import "./Header.css";
import myImage from '../assets/myImage.png';


function Header() {
  return (
    <div className="header">
      <div className="info">
        <h2>Hi I am</h2>
        <h2>Ajit Mane</h2>
        <span id="profession">Full-Stack Web<br/> And App Developer </span>
        <div className="icons">
          <a href="https://facebook.com">
            {" "}
            <FaFacebookF />
          </a>
          <a href="https://instagram.com">
            {" "}
            <FaInstagram />
          </a>
          <a href="https://linkedin.com">
            {" "}
            <FaLinkedin />
          </a>
          <a href="https://twitter.com">
            {" "}
            <FaTwitter />
          </a>
        </div>
        <button id='btn'>Hire me</button>
        <button id='btn'>Download CV</button>
        <div className="work-info">
            <div className="div">
                <h3 id="work-info">1+</h3>
                <h3>Experience</h3>
            </div>
            <div className="div">
                <h3 id="work-info">5+</h3>
                <h3>Project Done</h3>
            </div>
            <div>
                <h3 id="work-info">10+</h3>
                <h3>Happy Clients</h3>
            </div>
        </div>
      </div>
      <div className="image">
            <img src={myImage} alt="not found"/>
      </div>
    </div>
  );
}

export default Header;
