import styles from './ProjectsSideAnimation.module.css';

export default function ProjectsSideAnimation() {
  return (
    <aside className={styles['projects-sidebar']}>
      <span id={styles.my}>MY</span>
      <span id={styles.works}>WORKS</span>
    </aside>
  );
}
