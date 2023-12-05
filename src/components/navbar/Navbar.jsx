import styles from './Navbar.module.css';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { CustomCursorContext } from '../../context/CustomCursorContext';

export default function Navbar() {
  const { setType } = useContext(CustomCursorContext);
  const customEase = [0.16, 0.5, 0.2, 1];
  const buttonNames = ['HOME', 'ABOUT', 'PROJECTS', 'DOTS', 'CONTACT'];

  const handleHoverName = () => {
    setType('hover-name');
  };

  const handleHoverNameLeave = () => {
    setType('default');
  };

  const handleNavBtnHover = () => {
    setType('nav-hover');
  };

  const handleNavBtnHoverLeave = () => {
    setType('default');
  };

  const nameVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: { delay: 4.85, duration: 0.75, ease: customEase },
        opacity: { delay: 4.85, duration: 0.75, ease: customEase },
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const navVariant = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.01,
        delay: 4.7,
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

  const buttonVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 5 },
    exit: { opacity: 0, y: -5 },
  };

  return (
    <nav>
      <div>
        <motion.h3
          onMouseEnter={handleHoverName}
          onMouseLeave={handleHoverNameLeave}
          initial="hidden"
          animate="visible"
          variants={nameVariant}
        >
          DAVID SMOLEN
        </motion.h3>
      </div>
      <motion.div initial="hidden" animate="visible" variants={navVariant}>
        <div className={styles['nav-btns']}>
          {buttonNames.map((buttonName, index) => (
            <motion.button
              key={index}
              className={styles['nav-btn']}
              variants={buttonVariant}
              onMouseEnter={handleNavBtnHover}
              onMouseLeave={handleNavBtnHoverLeave}
            >
              {buttonName}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
