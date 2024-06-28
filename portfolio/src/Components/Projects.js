import './Projects.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

function Projects(params) {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='p1'>
                <img src={project1}/>
                <h3>Project 1</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam!</p>
            </div>
            <div className='p2'>
                <img src={project2}/>
                <h3>Project 2</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam!</p>
            </div>
            <div className='p3'>
                <img src={project3}/>
                <h3>Project 3</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam!</p>
            </div>

            <div className='p4'>
                <img src={project4}/>
                <h3>Project 4</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet. Ipsa ea quibusdam sapiente placeat, non adipisci quo quam obcaecati, corporis est, quasi rem aperiam!</p>
            </div>
        </div>
    );
}

export default Projects;