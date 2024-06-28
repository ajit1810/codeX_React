import About from "./Components/About";
import Contact from "./Components/Contact";
import Name from "./Components/Name";
import Navabar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import './App.css';


function App() {
  return (
    <div>
      
      <section className="header">
        <Navabar/>
        <Name/>
      </section>
      
      <section className="about">
        <About/>
      </section>
      
      <section className="skills">
          <Skills/>
      </section>

      <section className="projects">
            <Projects/>
      </section>

      <section className="projects">
            <Contact/>
      </section>
      
    </div>
  );
}

export default App;
