import styles from './SideDots.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SideDots({ scrollPosition }) {
  const [lineHeight, setLineHeight] = useState(0);
  const [secondDotProperties, setSecondDotProperties] = useState({
    color: 'rgba(15, 15, 15, 0)',
    height: '0rem',
    width: '0rem',
  });
  const [thirdDotProperties, setThirdDotProperties] = useState({
    color: 'rgba(15, 15, 15, 0)',
    height: '0.85rem',
    width: '0.85rem',
  });

  const [fourthDotProperties, setFourthDotProperties] = useState({
    color: 'rgba(15, 15, 15, 0)',
    height: '0.85rem',
    width: '0.85rem',
  });

  const [fifthDotProperties, setFifthDotProperties] = useState({
    color: 'rgba(15, 15, 15, 0)',
    height: '0.85rem',
    width: '0.85rem',
  });

  useEffect(() => {
    if (scrollPosition < 1000) {
      setLineHeight(0);
      setSecondDotProperties({
        color: 'rgba(15, 15, 15, 0)',
        height: '0rem',
        width: '0rem',
      });
    } else if (scrollPosition <= 1100) {
      setLineHeight(Math.min(scrollPosition / 16, 1100 / 16));
      setSecondDotProperties({
        color: 'rgb(239, 239, 239)',
        height: '0.85rem',
        width: '0.85rem',
      });
    } else if (scrollPosition <= 2000) {
      setLineHeight(1100 / 16);
      setSecondDotProperties({
        color: 'rgb(239, 239, 239)',
        height: '0.85rem',
        width: '0.85rem',
      });
      setThirdDotProperties({
        color: 'rgba(15, 15, 15, 0)',
        height: '0rem',
        width: '0rem',
      });
    } else if (scrollPosition <= 3000) {
      setLineHeight(Math.min(scrollPosition / 16, 2100 / 16));
      setThirdDotProperties({
        color: 'rgb(239, 239, 239)',
        height: '0.85rem',
        width: '0.85rem',
      });
      setFourthDotProperties({
        color: 'rgba(15, 15, 15, 0)',
        height: '0rem',
        width: '0rem',
      });
    } else if (scrollPosition <= 3900) {
      setLineHeight(3100 / 16);
      setFourthDotProperties({
        color: 'rgb(239, 239, 239)',
        height: '0.85rem',
        width: '0.85rem',
      });
      setFifthDotProperties({
        color: 'rgba(15, 15, 15, 0)',
        height: '0rem',
        width: '0rem',
      });
    } else {
      setLineHeight(4100 / 16);
      setFifthDotProperties({
        color: 'rgb(239, 239, 239)',
        height: '0.85rem',
        width: '0.85rem',
      });
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
            backgroundColor: 'rgb(239, 239, 239)',
            transition: 'height 1s ease-out',
          }}
        ></motion.div>
        <div className={styles['side-dot-filled']}></div>
        <div className={styles.dot}>
          <div
            style={{
              borderRadius: '50%',
              backgroundColor: secondDotProperties.color,
              height: secondDotProperties.height,
              width: secondDotProperties.width,
              transition:
                'background 0.3s ease-out 0.1s, height 0.3s ease-out 0.2s, width 0.3s ease-out 0.2s',
            }}
          ></div>
        </div>
        <div className={styles.dot}>
          <div
            style={{
              borderRadius: '50%',
              backgroundColor: thirdDotProperties.color,
              height: thirdDotProperties.height,
              width: thirdDotProperties.width,
              transition:
                'background 0.3s ease-out 0.1s, height 0.3s ease-out 0.2s, width 0.3s ease-out 0.2s',
            }}
          ></div>
        </div>
        <div className={styles.dot}>
          <div
            style={{
              borderRadius: '50%',
              backgroundColor: fourthDotProperties.color,
              height: fourthDotProperties.height,
              width: fourthDotProperties.width,
              transition:
                'background 0.3s ease-out 0.1s, height 0.3s ease-out 0.2s, width 0.3s ease-out 0.2s',
            }}
          ></div>
        </div>
        <div className={styles.dot}>
          <div
            style={{
              borderRadius: '50%',
              backgroundColor: fifthDotProperties.color,
              height: fifthDotProperties.height,
              width: fifthDotProperties.width,
              transition:
                'background 0.3s ease-out 0.1s, height 0.3s ease-out 0.2s, width 0.3s ease-out 0.2s',
            }}
          ></div>
        </div>
      </div>
    </aside>
  );
}

SideDots.propTypes = {
  scrollPosition: PropTypes.number,
};
