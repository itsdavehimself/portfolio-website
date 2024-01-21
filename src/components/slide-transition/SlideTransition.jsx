import styles from './SlideTransition.module.css';
import { motion, animate, easeInOut } from 'framer-motion';
import { useEffect, useRef } from 'react';
import propTypes from 'prop-types';

export default function SlideTransition({ isTransitioning }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const sliderElement = sliderRef.current;

    const sequence = [
      [sliderElement, { y: 0 }, { duration: 0.75, ease: easeInOut }],
      [
        sliderElement,
        { y: -window.innerHeight },
        { delay: 0.75, duration: 0.75, ease: easeInOut },
      ],
    ];

    if (isTransitioning) {
      animate(sequence);
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.body.style.overflow = 'visible';
      }, 2000);
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
