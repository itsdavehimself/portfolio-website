import headshot from '../../assets/headshot.png';
import headshotColor from '../../assets/headshot-color.jpg';
import styles from './HeroSection.module.css';
import { useContext, useEffect } from 'react';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import { scroll } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const { type, setType } = useContext(CustomCursorContext);

  const heroDivRef = useRef(null);

  useEffect(() => {
    const heroDiv = heroDivRef.current;
    scroll((progress) => {
      heroDiv.style.opacity = `${1 - progress}`;
      heroDiv.style.scale = `${1 - progress}`;

      if (Math.abs(progress - 1) < 0.01) {
        heroDiv.style.display = 'none';
      } else if (Math.abs(progress - 1) > 0.01) {
        heroDiv.style.display = 'grid';
      }
    });
  }, [heroDivRef]);

  const handleHover = () => {
    setType('hover-name');
  };

  const handleHoverLeave = () => {
    setType('default');
  };

  return (
    <main className={styles.container}>
      <div className={styles['hero-container']}>
        <section className={styles.hero} ref={heroDivRef}>
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

          <img className={styles['hero-image']} src={headshotColor} />
        </section>
      </div>
    </main>
  );
}
