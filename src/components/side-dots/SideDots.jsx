import styles from './SideDots.module.css';

export default function SideDots() {
  return (
    <aside>
      <div className={styles['side-dots']}>
        <div className={styles['side-dot']}></div>
        <div className={styles['side-dot']}></div>
        <div className={styles['side-dot']}></div>
        <div className={styles['side-dot']}></div>
        <div className={styles['side-dot']}></div>
      </div>
    </aside>
  );
}
