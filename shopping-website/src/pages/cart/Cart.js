import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import "./Cart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import myContext from "../../components/context/MyContext";
import Modal from "../../components/modal/Modal";

const Cart = () => {
  const context = useContext(myContext);
  const {mode} = context;
  return (
    <Layout>
      <div className="cart-items" style={{color:mode==='dark'?'white':''}}>
        <h1>Cart Items</h1>
        <div className="flex">
          <div className="cart-product-info" style={{backgroundColor:mode==='dark'?'black':'',boxShadow:mode==="dark"?"none":"", 
          border:mode==='dark'?'1px solid white' :''
          }}>
            {/* img  */}
            <div className="image"></div>
            <div className="info">
              <h2>This is title</h2>
              <p>desc</p>
              <p>₹100</p>
            </div>
            <div>
              <i>
                <RiDeleteBin6Line />
              </i>
            </div>
          </div>
          <div className="cart-total" style={{backgroundColor:mode==='dark'?'black':'',boxShadow:mode==="dark"?"none":"",
             border:mode==='dark'?'1px solid white' :''
          }}>
            <div className="total">
              <p>Subtotal</p>
              <p>₹100</p>
            </div>
            <div className="total">
              <p>Shipping</p>
              <p>₹20</p>
            </div>
            <hr/>
            <div className="total">
                <h3>Total</h3>
                <h3>₹200</h3>
            </div>
            <Modal/>
            {/* <button className="cart-btn">Buy Now</button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
