import { Link, useNavigate, useOutletContext } from "react-router";
import "./Cart.css";
import styles from "./EmptyCart.module.css";
import { useState } from "react";

function Cart() {
  const { cart, setCart, cartLength } = useOutletContext();
  const navigate = useNavigate();

  // Counts how many times each item in cart appears
  const [itemCount, setItemCount] = useState(
    cart.reduce((acc, item) => {
      acc[item.title] = (acc[item.title] || 0) + 1;
      return acc;
    }, {})
  );

  function handleRemoveItem(itemToRemove) {
    if (itemCount[itemToRemove.title] >= 1) {
      setCart((prev) => {
        const index = cart.findLastIndex((item) => item === itemToRemove);
        return index !== -1
          ? [...prev.slice(0, index), ...prev.slice(index + 1)]
          : prev;
      });

      setItemCount((prev) => ({
        ...prev,
        [itemToRemove.title]: prev[itemToRemove.title] - 1,
      }));
    }
  }

  function handleAddQuantity(item) {
    setCart((prev) => [...prev, item]);
    setItemCount((prev) => ({
      ...prev,
      [item.title]: prev[item.title] + 1,
    }));
  }

  function handleRemoveBtn(item) {
    setCart((prev) => prev.filter((product) => product !== item));
  }
  const newCart = [...new Set(cart)]; //removes duplicate

  const subTotal = cart
    .map((item) => item.price)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  return (
    <>
      {cartLength < 1 ? (
        <div className={styles.emptyCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#999"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.cartIcon}
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>

          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet.</p>

          <Link to="/shop" className={styles.shopBtn}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <h1>Your Shopping Cart</h1>

          {newCart.map((item) => {
            return (
              <div className="cart-items" key={item.id}>
                <div className="cart-item">
                  <img src={item.image} alt="Product" className="cart-img" />
                  <div className="cart-details">
                    <h3>{item.title}</h3>
                    <p className="price">${item.price}</p>

                    <div className="quantity-controls">
                      <button onClick={() => handleRemoveItem(item)}>-</button>
                      <span>{itemCount[item.title]}</span>
                      <button onClick={() => handleAddQuantity(item)}>+</button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveBtn(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="cart-summary">
            <h2>Subtotal: ${subTotal}</h2>

            <div className="cart-actions">
              <button
                className="continue-btn"
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </button>
              <button
                className="checkout-btn"
                onClick={() => alert("la ka naman pera :/")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
