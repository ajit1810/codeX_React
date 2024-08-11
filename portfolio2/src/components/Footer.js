import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <h1>Ajit Mane</h1>
      <div className="footer-navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#project">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-icons">
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
      <div className="email">
        <p>ajitmane1810@gmail.com</p> <p>+917420928727</p>
      </div>

      <p id="footer">This website designed by Ajit Mane and contain ©2024</p>
    </div>
  );
}

export default Footer;
