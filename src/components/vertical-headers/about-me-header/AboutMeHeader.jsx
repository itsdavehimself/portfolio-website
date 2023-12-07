import styles from './AboutMeHeader.module.css';

export default function AboutMeHeader() {
  return (
    <aside className={styles['about-me-sidebar']}>
      <span id={styles.about}>ABOUT</span>
      <span id={styles.me}>ME</span>
    </aside>
  );
}
