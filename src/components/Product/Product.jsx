import { useParams } from "react-router";
import styles from "./Product.module.css";
function Product() {
  const { name } = useParams();
  return (
    <div className={styles.productContainer}>
      <h1>{name}</h1>
    </div>
  );
}

export default Product;
