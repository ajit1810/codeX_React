import "./Name.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Name() {
  return (
    <div>
      <div className="info">
        <div className="name">
            <h1>Hello, I am Ajit Mane</h1>
            <h2>Fullstack Developer & App Developer</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! 
            </p>
           
        </div>

        <div className="photo">

        </div>

      </div>
        <div className="icons">
           <a href="https://facebook.com"> <FaFacebook/></a>
           <a href="https://instagram.com"> <FaInstagram/></a>
           <a href="https://linkedin.com"> <FaLinkedin/></a>
           <a href="https://twitter.com"> <FaTwitter/></a>
            
           
        </div>
    </div>
  );
}

export default Name;
