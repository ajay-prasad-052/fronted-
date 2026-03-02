import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import "./placeorder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully 🎉");
    navigate("/");
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      {/* LEFT SIDE - DELIVERY FORM */}
      <div className="place-order-left">
        <h2>Delivery Information</h2>

        <div className="multi-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Street" required />

        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>

        <input type="text" placeholder="Phone" required />
      </div>

      {/* RIGHT SIDE - CART TOTAL */}
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 40}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}
              </b>
            </div>
          </div>

          <button type="submit">Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
