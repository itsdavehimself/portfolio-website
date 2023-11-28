import headshot from '../../assets/headshot.png';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <main className={styles.overlay}>
      <div className={styles.hero}>
        <section className={styles.container}>
          <div className={styles['hero-text']}>
            <p className={styles.tagline}>
              Over the last 10 years, I&apos;ve been weaving a web of skills by
              collecting and connecting dots…
            </p>
            <h1>DAVID SMOLEN</h1>
            <h2>FULL-STACK DEVELOPER</h2>
          </div>

          <img className={styles['hero-image']} src={headshot} />
        </section>
      </div>
    </main>
  );
}
