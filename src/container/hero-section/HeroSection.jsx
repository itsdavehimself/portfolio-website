import headshotColor from '../../assets/headshot-color.jpg';
import styles from './HeroSection.module.css';
import { motion } from 'framer-motion';
import IntroSequence from '../../components/intro-sequence/IntroSequence';
import ScrollDown from '../../components/scroll-down/ScrollDown';
import Navbar from '../../components/navbar/Navbar';
import PropTypes from 'prop-types';

export default function HeroSection({ scrollPosition }) {
  const customEase = [0.16, 0.5, 0.2, 1];

  const tagline =
    'Weaving a web of skills by collecting and connecting dots...';
  const fullstack = 'FULL-STACK';
  const developer = 'DEVELOPER';

  const fullstackVariant = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.01,
        delay: 4.375,
        ease: customEase,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        ease: customEase,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.01,
        ease: customEase,
      },
    },
  };

  const developerVariant = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.01,
        delay: 4.375,
        ease: customEase,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        ease: customEase,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.01,
        ease: customEase,
      },
    },
  };

  const taglineVariant = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.01,
        delay: 4.3,
        ease: customEase,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        ease: customEase,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.01,
        ease: customEase,
      },
    },
  };

  const letterVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 5 },
    exit: { opacity: 0, y: -5 },
  };

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

  const scrollComponent = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { delay: 4.5, duration: 0.75, ease: customEase },
        opacity: { delay: 4.55, duration: 0.75, ease: customEase },
      },
    },
    hidden: { opacity: 0, y: 50 },
  };

  const imageComponent = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { delay: 4.55, duration: 0.75, ease: customEase },
        opacity: { delay: 4.6, duration: 0.75, ease: customEase },
      },
    },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.main
      className={styles['hero-container']}
      style={{ opacity: 1 - scrollPosition / 950 }}
    >
      <motion.section
        className={styles['intro-sequence']}
        initial="hidden"
        animate="visible"
        variants={introDiv}
      >
        <IntroSequence />
      </motion.section>
      <motion.div
        className={styles['scroll-component']}
        initial="hidden"
        animate="visible"
        variants={scrollComponent}
      >
        <ScrollDown />
      </motion.div>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles['hero-text']}>
          <h1 className={styles.title}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fullstackVariant}
              className={styles.fullstack}
            >
              {fullstack.split('').map((letter, index) => (
                <motion.span key={index} variants={letterVariant}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={developerVariant}
              className={styles.developer}
            >
              {developer.split('').map((letter, index) => (
                <motion.span key={index} variants={letterVariant}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={taglineVariant}
            className={styles.tagline}
          >
            {tagline.split(' ').map((word, index) => (
              <motion.span key={index} variants={letterVariant}>
                {word} <motion.span></motion.span>
              </motion.span>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageComponent}
        >
          <img
            className={styles['hero-image']}
            src={headshotColor}
            alt="David Smolen"
          ></img>
        </motion.div>
      </section>
    </motion.main>
  );
}

HeroSection.propTypes = {
  scrollPosition: PropTypes.number,
};
