import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.root}>
      <span className={styles.title}>Bet A Coin!</span>
    </div>
  );
}
