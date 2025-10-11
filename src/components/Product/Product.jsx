import { useOutletContext, useParams } from "react-router";
import styles from "./Product.module.css";
import { useState } from "react";
function Product() {
  const [quantity, setQuantity] = useState(1);

  const { name } = useParams();
  const { products, setCart } = useOutletContext();

  const item = products.find((product) => product.title === name);

  function handleQuantity(e) {
    if (e.target.name === "input") {
      setQuantity(e.target.value >= 1 && Number(e.target.value));
    }

    if (e.target.className === "decrease" && quantity !== 1) {
      setQuantity((prev) => prev - 1);
    }

    if (e.target.className === "increase") {
      setQuantity((prev) => prev + 1);
    }
  }

  function handleAddToCart(item, quantity) {
    for (let i = 0; i < quantity; i++) {
      setCart((prev) => [...prev, item]);
    }
  }
  return (
    <>
      {item ? (
        <div className={styles.itemContainer}>
          <div className={styles.itemWrapper}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt="product image" />
            </div>

            <div className={styles.itemInfoWrapper}>
              <div className={styles.itemInfo}>
                <div className={styles.itemTitle}>
                  <h1>{item.title}</h1>
                </div>
                <div className={styles.itemReview}>
                  <span>No reviews found</span>
                </div>
                <div className={styles.itemPrice}>
                  <span>${item.price.toFixed(2)}</span>
                </div>
                <div className={styles.itemQuantityWrapper}>
                  <div className={styles.itemQuantity}>
                    <button className="decrease" onClick={handleQuantity}>
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      name="input"
                      onChange={handleQuantity}
                    />
                    <button className="increase" onClick={handleQuantity}>
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.itemSubmitBtn}>
                  <div className={styles.itemAddBtn}>
                    <button onClick={() => handleAddToCart(item, quantity)}>
                      <span>Add to Cart</span>
                      <span>•</span>
                      <span>${(item.price * quantity).toFixed(2)}</span>
                    </button>
                  </div>
                </div>
                <div className={styles.descriptionWrapper}>
                  <h3>DESCRIPTION</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </>
  );
}

export default Product;
