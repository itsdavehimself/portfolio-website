import styles from './MySkillsHeader.module.css';

export default function MySkillsHeader() {
  return (
    <aside className={styles['skills-sidebar']}>
      <span id={styles.my}>MY</span>
      <span id={styles.skills}>SKILLS</span>
    </aside>
  );
}
