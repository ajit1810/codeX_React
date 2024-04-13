import Header from "./Header";
import './Home.css';
function Home() {
    return(
        <div className="home">
            <Header/>
            <div className="home-div">
                <div className="middle-div">
                    <h1>Cake Shop</h1>
                    <p>Baking With Heart</p>
                    <button>Find Out</button>
                    <button>Read</button>
                </div>
            </div>
        </div>
    );
}
export default Home;