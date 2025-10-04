import styles from "/src/components/Home/Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.imageWrapper}>
        <img
          src="/9782010.jpg"
          alt="background image"
          width="1521"
          height="646"
        />
      </div>

      <h1>Styled with Passion</h1>
    </div>
  );
}

export default Home;
