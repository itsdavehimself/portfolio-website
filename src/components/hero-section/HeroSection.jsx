import headshotColor from '../../assets/headshot-color.jpg';
import styles from './HeroSection.module.css';
import { motion } from 'framer-motion';
import IntroSequence from '../intro-sequence/IntroSequence';
import ScrollDown from '../scroll-down/ScrollDown';
import Navbar from '../navbar/Navbar';

export default function HeroSection() {
  const customEase = [0.16, 0.5, 0.2, 1];

  const introDiv = {
    visible: {
      y: '-100%',
      transition: {
        delay: 4.5,
        duration: 0.75,
        ease: customEase,
      },
    },
    hidden: { y: 0 },
  };

  return (
    <main className={styles['hero-container']}>
      <motion.section
        className={styles['intro-sequence']}
        initial="hidden"
        animate="visible"
        variants={introDiv}
      >
        <IntroSequence />
      </motion.section>
      <ScrollDown />
      <Navbar />
      <section className={styles.hero}>
        <div className={styles['hero-text']}>
          <h1 className={styles.title}>
            <div className={styles.fullstack}>FULL-STACK</div>
            <div className={styles.developer}>DEVELOPER</div>
          </h1>
          <p className={styles.tagline}>
            Weaving a web of skills by collecting and connecting dots...
          </p>
        </div>
        <img
          className={styles['hero-image']}
          src={headshotColor}
          alt="David Smolen"
        ></img>
      </section>
    </main>
  );
}
