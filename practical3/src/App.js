// import logo from './logo.svg';
// import './App.css';
import './Navbar.css';
import './Home.css';
import './Footer.css';


import { Footer, Home, Navbar } from "./components";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
