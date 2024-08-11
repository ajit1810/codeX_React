import React, { useContext } from "react";
import myContext from "../context/MyContext";
import { MdOutlineLocalShipping } from "react-icons/md";

import "./Track.css";
import { IoBagOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Track = () => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div className="track" style={{ color: mode === "dark" ? "white" : "" }}>
      <div
        className="track-cart"
        style={{
          backgroundColor: mode === "dark" ? "#2e3137" : "",
          border: mode === "dark" ? "1px solid white" : "",
        }}
      >
        <i>
          <IoBagOutline />
        </i>
        <h3>Premium Tshirts</h3>
        <p>Our T-Shirts are 100% made of cotton.</p>
      </div>
      <div
        className="track-cart"
        style={{
          backgroundColor: mode === "dark" ? "#2e3137" : "",
          border: mode === "dark" ? "1px solid white" : "",
        }}
      >
        <i>
          <MdOutlineLocalShipping />
        </i>
        <h3>Free Shipping</h3>
        <p>We ship all over India for FREE.</p>
      </div>
      <div
        className="track-cart"
        style={{
          backgroundColor: mode === "dark" ? "#2e3137" : "",
          border: mode === "dark" ? "1px solid white" : "",
        }}
      >
        <i>
          <FaIndianRupeeSign />
        </i>
        <h3>Exciting Offers</h3>
        <p>We provide amazing offers & discounts</p>
      </div>
    </div>
  );
};

export default Track;
