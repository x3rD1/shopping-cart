import { Link, useOutletContext } from "react-router";
import { useState } from "react";
import styles from "./Shop.module.css";
function Shop() {
  const [isFilter, setIsFilter] = useState(false);
  const [layout, setLayout] = useState({ grid2: false, grid3: false });
  const { products, setCart } = useOutletContext();

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
          <div className={styles.filterLayout}>
            <button
              className={styles.filterLayoutGrid2}
              onClick={() =>
                setLayout((prev) => ({ ...prev, grid2: true, grid3: false }))
              }
            >
              <svg
                width="34px"
                height="34px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 4.5L4.5 3.75H10.5L11.25 4.5V10.5L10.5 11.25H4.5L3.75 10.5V4.5ZM5.25 5.25V9.75H9.75V5.25H5.25ZM12.75 4.5L13.5 3.75H19.5L20.25 4.5V10.5L19.5 11.25H13.5L12.75 10.5V4.5ZM14.25 5.25V9.75H18.75V5.25H14.25ZM3.75 13.5L4.5 12.75H10.5L11.25 13.5V19.5L10.5 20.25H4.5L3.75 19.5V13.5ZM5.25 14.25V18.75H9.75V14.25H5.25ZM12.75 13.5L13.5 12.75H19.5L20.25 13.5V19.5L19.5 20.25H13.5L12.75 19.5V13.5ZM14.25 14.25V18.75H18.75V14.25H14.25Z"
                    fill="#553b6b"
                  ></path>{" "}
                </g>
              </svg>
            </button>
            <button
              className={styles.filterLayoutGrid3}
              onClick={() =>
                setLayout((prev) => ({ ...prev, grid2: false, grid3: true }))
              }
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 17 17"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M0 5h5v-5h-5v5zM1 1h3v3h-3v-3zM6 5h5v-5h-5v5zM7 1h3v3h-3v-3zM12 0v5h5v-5h-5zM16 4h-3v-3h3v3zM0 11h5v-5h-5v5zM1 7h3v3h-3v-3zM6 11h5v-5h-5v5zM7 7h3v3h-3v-3zM12 11h5v-5h-5v5zM13 7h3v3h-3v-3zM0 17h5v-5h-5v5zM1 13h3v3h-3v-3zM6 17h5v-5h-5v5zM7 13h3v3h-3v-3zM12 17h5v-5h-5v5zM13 13h3v3h-3v-3z"
                  fill="rgb(85, 59, 107)"
                />
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
            <ul
              style={{
                gridTemplateColumns: layout.grid2
                  ? "repeat(2, 1fr)"
                  : layout.grid3
                  ? "repeat(3, 1fr)"
                  : "",
              }}
            >
              {products.map((product) => {
                return (
                  <li key={product.id}>
                    <Link to={`/products/${product.title.replace(/\//g, "")}`}>
                      <div className={styles.productCard}>
                        <div className={styles.productImage}>
                          <img src={product.image} alt="product image" />
                        </div>
                        <div className={styles.productInfoWrapper}>
                          <p>{product.title}</p>
                          <span>${product.price}</span>
                        </div>
                        <button
                          className={styles.addToCartWrapper}
                          onClick={(e) => {
                            e.preventDefault();
                            setCart((prev) => [...prev, product]);
                          }}
                        >
                          <span>ADD TO CART</span>
                        </button>
                      </div>
                    </Link>
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
