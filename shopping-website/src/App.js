import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import AddProduct from "./pages/addProduct/AddProduct";
import Order from "./pages/order/Order";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Cart from "./pages/cart/Cart";
import MyState from "./components/context/MyState";

function App() {
  return (
    <div className="App">
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allproducts" element={<AddProduct />} />
            <Route path="/order" element={<Order />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            
          </Routes>
        </Router>
      </MyState>
    </div>
  );
}

export default App;
