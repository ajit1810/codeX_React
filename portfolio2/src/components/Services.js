
import { FaPerson, FaReact, FaUser, FaUserAstronaut, FaUsers } from 'react-icons/fa6';
import flutter from '../assets/flutter-removebg.png';
import web from '../assets/webImg.png';
import './Services.css';
import { FaUserAlt, FaUserAltSlash, FaUserCircle, FaUserCog } from 'react-icons/fa';
function Services() {
    return(
        <div className="services" id='services'>
            <h2>Services</h2>
            <p>We provide App development on Andriod and Ios with proper application deployment and Even we provide Web-application</p>
            <div className='services-cards'>
                <div className='card'>
                    <i><FaUser/></i>
                    <h5 id='h5'>App Development</h5>
                    <p id='card'> Provide application development on andriod and ios with proper deployment.</p>
                </div>
                <div className='card'>
                <i><FaUser/></i>
                    <h5 id='h5'>Web Development</h5>
                    <p id='card'>  Provide utilized React.js to develop dynamic and responsive websites. </p>
                </div>
                <div className='card'>
                <i><FaUser/></i>
                    <h5 id='h5'>Hosting Services</h5>
                    <p id='card'> Provide application development on andriod and ios with proper deployment.</p>
                </div>
            </div>
            {/* <div className='services-cards'>
                <div className='card'>
                    <img src={flutter} alt='not found'/>
                    <h5 id='h5'>App Development</h5>
                    <p id='card'> Provide application development on andriod and ios with proper deployment.</p>
                </div>
                <div className='card'>
                    <i><FaReact/></i>
                    <h5 id='h5'>Web Development</h5>
                    <p id='card'> Provide application development on andriod and ios with proper deployment.</p>
                </div>
                <div className='card'>
                    <img src={flutter} alt='not found'/>
                    <h5 id='h5'>Hosting Services</h5>
                    <p id='card'> Provide application development on andriod and ios with proper deployment.</p>
                </div>
            </div> */}

        </div>
    );
}

export default Services;