import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './AllRoutes';
import StoreContextProvider from './Context/storeContext';
import Footer from './components/Footer/Footer';
import Login from './components/LoginPopOf/Login';


const App = () => {
  const [showLogin,setShowLogin] = useState(false);

  return ( 
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>

       <Router>
        <StoreContextProvider> 
          <Navbar setShowLogin={setShowLogin}/>
          <AllRoutes/>
        </StoreContextProvider>
      </Router>
    </div>
    <Footer/>
    </>
  )
}

export default App