import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/features" Component={Features}/>
                    <Route path="/services" Component={Services}/>
                    <Route path="/testimonials" Component={Testimonials}/>
                    <Route path="/contact" Component={Contact}/>
                </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
