// import logo from './logo.svg';
import './App.css';

import Home from "./components/Home";
import Services from './components/Services';

function App() {
  return (
    <div className="App">
        <section id="banner">
           <Home/>
        </section>

        <section id="services">
           <Services/>
        </section>
    </div>
  );
}

export default App;
