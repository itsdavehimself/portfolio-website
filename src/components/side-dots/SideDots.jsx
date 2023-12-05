import styles from './SideDots.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SideDots({ scrollPosition }) {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (scrollPosition < 1000) {
      setLineHeight(0);
    } else if (scrollPosition <= 1100) {
      setLineHeight(Math.min(scrollPosition / 16, 1100 / 16));
    } else if (scrollPosition <= 2000) {
      setLineHeight(1100 / 16);
    } else if (scrollPosition <= 3000) {
      setLineHeight(Math.min(scrollPosition / 16, 2100 / 16));
    } else if (scrollPosition <= 3900) {
      setLineHeight(3100 / 16);
    } else {
      setLineHeight(4100 / 16);
    }
  }, [scrollPosition]);

  return (
    <aside>
      <div className={styles['side-dots']}>
        <motion.div
          style={{
            position: 'absolute',
            height: lineHeight,
            width: 2,
            backgroundColor: '#efefef',
            transition: 'height 1s ease-in-out',
          }}
        ></motion.div>
        <div className={styles['side-dot-filled']}></div>
        <div className={styles['side-dot-empty']}></div>
        <div className={styles['side-dot-empty']}></div>
        <div className={styles['side-dot-empty']}></div>
        <div className={styles['side-dot-empty']}></div>
      </div>
    </aside>
  );
}

SideDots.propTypes = {
  scrollPosition: PropTypes.number,
};
