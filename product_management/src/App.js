
import {BrowserRouter as  Router } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import AllRoutes from './AllRoutes';


function App() {
  return (
    <div className="App">

      
      <Router>
        <Navbar />
        <AllRoutes/>
      </Router>
    
    
    </div>
  );
}

export default App;
