import headshotColor from '../../assets/headshot.jpeg';
import styles from './HeroSection.module.css';
import { motion, useScroll } from 'framer-motion';
import IntroSequence from '../../components/intro-sequence/IntroSequence';
import ScrollDown from '../../components/scroll-down/ScrollDown';
import PropTypes from 'prop-types';
import { useRef } from 'react';

export default function HeroSection() {
  const heroContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroContainer,
    offset: ['0.8 0.8', 'end 0.35'],
  });
  const customEase = [0.16, 0.5, 0.2, 1];

  const tagline = 'WEAVING A WEB OF SKILLS BY COLLECTING & CONNECTING DOTS';
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
    <motion.main ref={heroContainer}>
      <motion.div
        className={styles['hero-container']}
        style={{ opacity: 1 - scrollYProgress.current }}
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
            className={styles['image-div']}
          >
            <img
              className={styles['hero-image']}
              src={headshotColor}
              alt="David Smolen"
            ></img>
          </motion.div>
        </section>
      </motion.div>
    </motion.main>
  );
}

HeroSection.propTypes = {
  scrollPosition: PropTypes.number,
};
