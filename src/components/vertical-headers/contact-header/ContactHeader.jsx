import styles from './ContactHeader.module.css';

export default function ContactHeader() {
  return (
    <aside className={styles['contact-sidebar']}>
      <span id={styles.contact}>CONTACT</span>
      <span id={styles.me}>ME</span>
    </aside>
  );
}
