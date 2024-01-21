import styles from './SlideTransition.module.css';
import { motion, animate, easeInOut } from 'framer-motion';
import { useEffect, useRef, useContext } from 'react';
import propTypes from 'prop-types';
import { CustomCursorContext } from '../../context/CustomCursorContext';

export default function SlideTransition({ isTransitioning }) {
  const sliderRef = useRef(null);
  const { setType } = useContext(CustomCursorContext);

  useEffect(() => {
    const sliderElement = sliderRef.current;

    const sequence = [
      [sliderElement, { y: 0 }, { duration: 1, ease: easeInOut }],
      [
        sliderElement,
        { y: -window.innerHeight },
        { delay: 1, duration: 1, ease: easeInOut },
      ],
    ];

    if (isTransitioning) {
      animate(sequence);
      setType('hidden');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.body.style.overflow = 'visible';
      }, 3000);
    } else return;
  }, [isTransitioning]);

  return (
    <motion.div
      ref={sliderRef}
      className={styles.slider}
      initial={{ y: window.innerHeight }}
    ></motion.div>
  );
}

SlideTransition.propTypes = {
  isTransitioning: propTypes.bool,
};
