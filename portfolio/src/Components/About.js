import './About.css';
import laptop from '../assets/laptop.png';

function About() {
    return(
        <div className='about'>
            <h1>About Me</h1>
            <div className='about-info'>
                <img src={laptop} alt='not found'/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! 
                <br/>
                <button id='contact'>Contact Me</button>   
                </p>
                
            </div>
        </div>
    );
}

export default About;