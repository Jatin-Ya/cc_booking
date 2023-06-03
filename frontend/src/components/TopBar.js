import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.name}>CC Booking App</div>
    </div>
  )
}

export default TopBar;