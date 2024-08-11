import React, { useContext } from "react";
import "./Card.css";
import { storeContext } from "../../Context/storeContext";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { cartItems, food_list, removeFromCart ,getTotalCartAmount} = useContext(storeContext);
 
  const navigate = useNavigate();
 
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.index] > 0) {
            return (
              <div>
                <div className="cart-items-item">
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.index]}</p>
                  <p>${item.price*cartItems[item.index]}</p>
                  <p onClick={()=>removeFromCart(item.index)} className="cross">X</p>
                </div>
                <hr />
              </div>
            );
          }
          
        })}
      </div>
      <div className="cart-bottom">
          <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-total-details">
                  <p>SubTotal</p>
                  <p>{0}</p>
                </div>
                <hr/>
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>${2}</p>
                </div>
                <hr/>
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>${2}</b>
                </div>
              </div>
                <button onClick={()=>navigate('/Order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promcode">
              <div>
                  <p>If you have promo code , Enter it here</p>
                  <div className="cart-promcode-input">
                    <input type="text" placeholder="promcode" />
                    <button>Submit</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Card;
