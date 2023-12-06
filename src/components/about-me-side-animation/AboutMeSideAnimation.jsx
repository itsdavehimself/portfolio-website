import styles from './AboutMeSideAnimation.module.css';

export default function AboutMeSideAnimation() {
  return (
    <aside className={styles['about-me-sidebar']}>
      <span id={styles.about}>ABOUT</span>
      <span id={styles.me}>ME</span>
    </aside>
  );
}
