import { useOutletContext, useParams } from "react-router";
import styles from "./Product.module.css";
function Product() {
  const { name } = useParams();
  const { products } = useOutletContext();

  const item = products.find((product) => product.title === name);

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
                  <span>${item.price}</span>
                </div>
                <div className={styles.itemQuantityWrapper}>
                  <div className={styles.itemQuantity}>
                    <button className="decrease">-</button>
                    <input type="number" min="1" value="1" />
                    <button className="increase">+</button>
                  </div>
                </div>
                <div className={styles.itemSubmitBtn}>
                  <div className={styles.itemAddBtn}>
                    <button>
                      <span>Add to Cart</span>
                      <span>•</span>
                      <span>${item.price}</span>
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
