import Details from './details';
import Info from './info';
import './welcome.css';
function Welcome() {
    return(
        <div className="main-box">
                <div className="box">
                    <Details name="ajit" backgroundColor = "orange" color = "white"/>
                    <Details name="mane" backgroundColor = "green" color = "purple"/>
                </div>
                <Info/>
        </div>
    );
}

export default Welcome;