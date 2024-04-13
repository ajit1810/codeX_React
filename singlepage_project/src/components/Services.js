import ServicesBox from './Box';
import './Services.css';

function Services() {
    return(
        <div className="services">
            <h1>We Provide Better</h1>
            <div className="services-box">
                <ServicesBox/>
                <ServicesBox/>
                <ServicesBox/>
                <ServicesBox/>
                
            </div>
        </div>
    );
}

export default Services;