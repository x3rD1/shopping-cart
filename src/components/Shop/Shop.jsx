// import { useOutletContext } from "react-router";
import { useState } from "react";
import styles from "./Shop.module.css";
function Shop() {
  const [isFilter, setIsFilter] = useState(false);
  // const products = useOutletContext();
  return (
    <div className={styles.shopContainer}>
      <div className={styles.heroSection}>
        <div className={styles.imageStyles}>
          <img src="/SummerBanner.png" alt="Banner Image" />
        </div>
      </div>

      <div className={styles.introSection}>
        <div className={styles.introWrapper}>
          <h1 className={styles.introHeading}>Style That Moves With You</h1>
        </div>
        <div className={styles.introTextWrapper}>
          <p>
            {" "}
            From everyday essentials to standout pieces, we've got what you need
            to look sharp and feel confident.
          </p>
        </div>
      </div>

      <div className={styles.productContainer}>
        <div className={styles.productFilterWrapper}>
          <div className={styles.filter}>
            <button
              className={styles.filterBtn}
              onClick={() => setIsFilter((prev) => !prev)}
            >
              <span
                className={`${
                  isFilter ? styles.showFilters : styles.hideFilters
                }`}
              >
                {isFilter ? "Hide filter " : "Filter"}
              </span>
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                strokeWidth="0.00016"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M0 3H16V1H0V3Z" fill="#553b6b"></path>{" "}
                  <path d="M2 7H14V5H2V7Z" fill="#553b6b"></path>{" "}
                  <path d="M4 11H12V9H4V11Z" fill="#553b6b"></path>{" "}
                  <path d="M10 15H6V13H10V15Z" fill="#553b6b"></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.productListContainer}>
          <div
            className={`${styles.filterOptionsOnMobile} ${
              isFilter ? styles.show : ""
            }`}
          >
            <button
              className={styles.filterOptionsOnMobileClose}
              onClick={() => setIsFilter((prev) => !prev)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
