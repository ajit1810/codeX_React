import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import BookForm from "./Components/BookForm";
import Navbar from "./Components/Navbar";
import AllRoutes from "./AllRoutes";
import DrawerAppBar from "./Components/Navbar";
// import Booklist from "./Components/Booklist";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        {/* <AllRoutes/> */}
      </Router>
    </div>
  );
}

export default App;
