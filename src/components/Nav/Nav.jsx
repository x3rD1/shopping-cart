import { useState } from "react";
import { Link } from "react-router";
import styles from "./Nav.module.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/cool-apparel.png" alt="cool apparel logo" />
      </div>

      <div className={styles.hamburgerContainer}>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen((prev) => !prev)}
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

      <div className={styles.nav_right_container}>
        <div className={styles.cart}>
          <Link to="cart">
            <div className={styles.svg_wrapper}>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
            </div>
            <sup>0</sup>
          </Link>
        </div>
        <div className={styles.login}>
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
