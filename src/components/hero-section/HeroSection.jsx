import headshot from '../../assets/headshot.png';
import styles from './HeroSection.module.css';
import { useContext } from 'react';
import { CustomCursorContext } from '../../context/CustomCursorContext';

export default function HeroSection() {
  const { type, setType } = useContext(CustomCursorContext);

  const handleHover = () => {
    setType('hover-name');
  };

  const handleHoverLeave = () => {
    setType('default');
  };

  return (
    <main className={styles.overlay}>
      <div className={styles.hero}>
        <section className={styles.container}>
          <div className={styles['hero-text']}>
            <p className={styles.tagline}>
              Over the last 10 years, I&apos;ve been weaving a web of skills by
              collecting and connecting dots…
            </p>
            <h1 onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
              DAVID SMOLEN
            </h1>
            <h2>FULL-STACK DEVELOPER</h2>
          </div>

          <img className={styles['hero-image']} src={headshot} />
        </section>
      </div>
    </main>
  );
}
