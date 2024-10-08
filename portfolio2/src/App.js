
import './App.css';
import About from './components/About';
import Contact_me from './components/Contact_me';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Services/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact_me/>
        <Footer/>
    </div>
  );
}

export default App;
