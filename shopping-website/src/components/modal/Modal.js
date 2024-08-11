import myContext from "../context/MyContext";
import "./Modal.css";

import React, { useContext, useState } from "react";

const Modal = () => {

  const context = useContext(myContext);
  const {mode} = context;

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div>
        <button className="cart-btn" onClick={openModal}>
          Buy Now
        </button>
      </div>

      {/* when i click on Buy now  there is pop of */}
      {isOpen && (
        <div className="modal-overlay" style={{color:mode==='dark'?'black':''}}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <form>
              <div className="form-values">
                <label htmlFor="name" className="label">
                  Enter Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input"
                  required
                />
              </div>
              <div className="form-values">
                <label htmlFor="name" className="label">
                  Enter Full Address
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input"
                  required
                />
              </div>
              <div className="form-values">
                <label htmlFor="name" className="label">
                  Enter Pincode
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input"
                  required
                />
              </div>
              <div className="form-values">
                <label htmlFor="name" className="label">
                  Enter Mobile Number
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input"
                  required
                />
              </div>
              <button className="cart-btn" onClick={closeModal}>
                Order Now
        </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
