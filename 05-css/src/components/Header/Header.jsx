import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Rayied</h3>
      <button className={styles.btn}>Login</button>
    </div>
  );
};

export default Header;
