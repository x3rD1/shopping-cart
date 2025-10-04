import { Link } from "react-router";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/cool-apparel.png" alt="cool apparel logo" />
      </div>

      <ul>
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
