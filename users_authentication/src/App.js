import './App.css';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Register from './components/register/register';
import Login from './components/login/login';
import Homepage from './pages/homepage';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
         <Route path='/' element={<Homepage/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
