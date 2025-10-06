import { useState } from "react";
import { Link } from "react-router";
import styles from "./Nav.module.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/cool-apparel.png" alt="cool apparel logo" />
      </div>

      <div className={styles.links}>
        <ul className={isOpen ? styles.open : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="sale">Sale</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
          <li>
            <Link to="showcase">Showcase</Link>
          </li>
        </ul>
      </div>

      <div className={styles.nav_right_container}>
        <div className={styles.profile}>
          <button
            className={styles.profileBtn}
            onClick={() => {
              setIsLoginOpen((prev) => !prev);
              setIsOpen(false);
            }}
          >
            <svg
              width="42px"
              height="42px"
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
                <g clipPath="url(#clip0_15_82)">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>{" "}
                  <g filter="url(#filter0_d_15_82)">
                    {" "}
                    <path
                      d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                      fill="#553b6b"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <filter
                    id="filter0_d_15_82"
                    x="2.55444"
                    y="3.5"
                    width="18.8911"
                    height="19"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    {" "}
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>{" "}
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>{" "}
                    <feOffset dy="1"></feOffset>{" "}
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>{" "}
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>{" "}
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_15_82"
                    ></feBlend>{" "}
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_15_82"
                      result="shape"
                    ></feBlend>{" "}
                  </filter>{" "}
                  <clipPath id="clip0_15_82">
                    {" "}
                    <rect width="24" height="24" fill="transparent"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
          </button>
          <div
            className={`${styles.login} ${
              isLoginOpen ? styles.loginOpen : styles.loginClose
            }`}
          >
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </div>

        <div className={styles.cart}>
          <Link to="cart">
            <svg
              width="42px"
              height="42px"
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
                  d="M3.86376 16.4552C3.00581 13.0234 2.57684 11.3075 3.47767 10.1538C4.3785 9 6.14721 9 9.68462 9H14.3153C17.8527 9 19.6214 9 20.5222 10.1538C21.4231 11.3075 20.9941 13.0234 20.1362 16.4552C19.5905 18.6379 19.3176 19.7292 18.5039 20.3646C17.6901 21 16.5652 21 14.3153 21H9.68462C7.43476 21 6.30983 21 5.49605 20.3646C4.68227 19.7292 4.40943 18.6379 3.86376 16.4552Z"
                  stroke="#553b6b"
                  strokeWidth="1.2"
                ></path>{" "}
                <path
                  d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
                  stroke="#553b6b"
                  strokeWidth="1.2"
                ></path>{" "}
                <path
                  d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
                  stroke="#553b6b"
                  strokeWidth="1.2"
                ></path>{" "}
              </g>
            </svg>

            <sup>0</sup>
          </Link>
        </div>

        <div className={styles.hamburgerContainer}>
          <button
            className={styles.hamburger}
            onClick={() => {
              setIsOpen((prev) => !prev);
              setIsLoginOpen(false);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className={`${styles.menu} ${
            isOpen ? styles.menuOpen : styles.menuClosed
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="shop" onClick={() => setIsOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="sale" onClick={() => setIsOpen(false)}>
                Sale
              </Link>
            </li>
            <li>
              <Link to="blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="showcase" onClick={() => setIsOpen(false)}>
                Showcase
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
