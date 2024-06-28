
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import AddProduct from './Component/AddProduct';
import EditProduct from './Component/EditProduct';

function App() {
  return (
    <div className="App">

      <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addProduct' element={<AddProduct/>}></Route>
      <Route path='/editProduct' element={<EditProduct/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
