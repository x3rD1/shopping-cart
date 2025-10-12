import { Link, useOutletContext, useParams } from "react-router";
import styles from "./Product.module.css";
function Product() {
  const { name } = useParams();
  const { products, setCart, quantity, setQuantity } = useOutletContext();

  const item = products.find(
    (product) => product.title.replace(/\//g, "") === name
  );

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
          <div className={styles.goBack}>
            <Link
              to="/shop#productList"
              onClick={() =>
                setTimeout(() => {
                  setQuantity(1);
                }, 500)
              }
            >
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="m 12 2 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 c -0.390625 -0.390625 -1.023437 -0.390625 -1.414062 0 l -6 6 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 s 0.105469 0.519531 0.292969 0.707031 l 6 6 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 c 0.1875 -0.1875 0.292969 -0.441406 0.292969 -0.707031 s -0.105469 -0.519531 -0.292969 -0.707031 l -5.292969 -5.292969 l 5.292969 -5.292969 c 0.1875 -0.1875 0.292969 -0.441406 0.292969 -0.707031 z m 0 0"
                    fill="#553b6b"
                  ></path>{" "}
                </g>
              </svg>
            </Link>
          </div>
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
