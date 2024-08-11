import React, { useContext } from "react";
import "./ProductCard.css";
import myContext from "../context/MyContext";


const ProductCard = () => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div className="productcard">
      <div className="top-text">
        <h1 style={{ color: mode === "dark" ? "white" : "" }}>
          Our Latest Collection
        </h1>
      </div>
      {/* carts  */}

      <div className="cart-flex" style={{color:mode==='dark' ? 'white':''}}>
        <div className="cart" >
          <div className="img"></div>
          <hr />
          <div className="cart-info">
            <p>E-Bharat</p>
            <h3>This is Title</h3>
            <p>₹ 500</p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="cart">
        <div className="img"></div>
          <hr />
          <div className="cart-info">
            <p>E-Bharat</p>
            <h3>This is Title</h3>
            <p>₹ 500</p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="cart">
        <div className="img"></div>
          <hr />
          <div className="cart-info">
            <p>E-Bharat</p>
            <h3>This is Title</h3>
            <p>₹ 500</p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="cart">
        <div className="img"></div>
          <hr />
          <div className="cart-info">
            <p>E-Bharat</p>
            <h3>This is Title</h3>
            <p>₹ 500</p>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
