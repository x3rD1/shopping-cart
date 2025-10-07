import { useOutletContext } from "react-router";
import { useState } from "react";
import styles from "./Shop.module.css";
function Shop() {
  const [isFilter, setIsFilter] = useState(false);
  const products = useOutletContext();
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

        <div className={styles.filterOptionsOnMobileContainer}>
          <div
            className={`${styles.filterOptionsOnMobile} ${
              isFilter ? styles.show : ""
            }`}
          >
            <div className={styles.filterNavWrapper}>
              <h2>Filter</h2>
              <button onClick={() => setIsFilter((prev) => !prev)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background circle */}
                  <circle cx="12" cy="12" r="12" fill="white" />

                  {/* X shape */}
                  <path
                    d="M14.5 9.5L9.5 14.5M9.5 9.5L14.5 14.5"
                    stroke="#a06af7"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className={styles.filterList}>
              <div className={styles.genderWrapper}>
                <h3>Gender</h3>

                <div className={styles.genderOptions}>
                  <ul>
                    <li>
                      <label htmlFor="all">
                        All
                        <input type="checkbox" id="all" />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="men">
                        Men
                        <input type="checkbox" id="men" />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="women">
                        Women
                        <input type="checkbox" id="women" />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.categoryWrapper}>
                <h3>Category</h3>

                <div className={styles.categoryOptions}>
                  <ul>
                    <li>
                      <label htmlFor="all_category">
                        All
                        <input type="checkbox" id="all_category" />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="clothing">
                        Clothing
                        <input type="checkbox" id="clothing" />
                      </label>
                    </li>
                    <li>
                      <label htmlFor="jewelry">
                        Jewelry
                        <input type="checkbox" id="jewelry" />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.productListContainer}>
          <div className={styles.filterOptionsOnDesktopContainer}></div>
          <div className={styles.productListWrapper}>
            <ul>
              {products.map((product) => {
                return (
                  <li key={product.id}>
                    <div className={styles.productImage}>
                      <img src={product.image} alt="product image" />
                    </div>
                    <div className={styles.productInfoWrapper}>
                      <p>{product.title}</p>
                      <span>${product.price}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
