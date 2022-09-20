import styles from "./App.module.css";
import abacoImg from "./assets/abaco.png";

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={abacoImg} alt="" width={40} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          ...
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  );
}

export default App;