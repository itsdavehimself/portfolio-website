import styles from './IntroSequence.module.css';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { useState, useEffect, useContext } from 'react';
import QuotesIcon from '../icons/QuotesIcon';
import { CustomCursorContext } from '../../context/CustomCursorContext';

export default function IntroSequence() {
  const [isQuoteVisible, setIsQuoteVisible] = useState(true);
  const [isOpenQuoteVisible, setIsOpenQuoteVisible] = useState(true);
  const [isCloseQuoteVisible, setIsCloseQuoteVisible] = useState(true);
  const { setType } = useContext(CustomCursorContext);

  const isSmallScreen = window.innerWidth <= 480;
  const isMediumScreen = window.innerWidth > 481 && window.innerWidth < 769;

  const xOpenValue = isSmallScreen
    ? '-6.5rem'
    : isMediumScreen
      ? '-11rem'
      : '-21.4rem';

  const yOpenValue = isSmallScreen
    ? '-3.5rem'
    : isMediumScreen
      ? '-2rem'
      : '-1rem';

  const xCloseValue = isSmallScreen
    ? '6rem'
    : isMediumScreen
      ? '10.5rem'
      : '21rem';

  const yCloseValue = isSmallScreen
    ? '3.5rem'
    : isMediumScreen
      ? '2rem'
      : '1rem';

  const sentence =
    'You have to trust that the dots will somehow connect in your future.';

  const sentenceVariant = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.015,
        delay: 1.6,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.015,
      },
    },
  };

  const letterVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
    exit: { opacity: 0, y: -10 },
  };

  useEffect(() => {
    setType('hidden');
    const customEase = [0.05, 0.17, 0.23, 1];
    const openQuotesSequence = [
      [
        '.open-quotes',
        { opacity: 1, scale: 1 },
        { delay: 0.05, duration: 0.1, ease: customEase },
      ],
      [
        '.open-quotes',
        { y: yOpenValue },
        { delay: 0.05, duration: 0.1, ease: customEase },
      ],
      [
        '.open-quotes',
        {
          x: xOpenValue,
          opacity: 0.15,
          scale: 0.5,
        },
        { delay: 0.05, duration: 0.15, ease: customEase },
      ],
    ];

    const closeQuoteSequence = [
      [
        '.close-quotes',
        { opacity: 1, scale: 1 },
        { delay: 0.05, duration: 0.1, ease: customEase },
      ],
      [
        '.close-quotes',
        { y: yCloseValue },
        { delay: 0.05, duration: 0.1, ease: customEase },
      ],

      [
        '.close-quotes',
        { x: xCloseValue, opacity: 0.15, scale: 0.5 },
        { delay: 0.05, duration: 0.15, ease: customEase },
      ],
    ];

    animate(openQuotesSequence, { duration: 2 });
    animate(closeQuoteSequence, { duration: 2 });

    document.body.style.overflow = 'hidden';

    const hideQuoteTimeout = setTimeout(() => {
      setIsQuoteVisible(false);
    }, 4200);

    const hideOpenCloseQuoteTimeout = setTimeout(() => {
      setIsOpenQuoteVisible(false);
      setIsCloseQuoteVisible(false);
      setType('default');
    }, 4300);

    const restoreBodyOverflowTimeout = setTimeout(() => {
      document.body.style.overflow = 'visible';
    }, 5500);

    return () => {
      clearTimeout(hideQuoteTimeout);
      clearTimeout(hideOpenCloseQuoteTimeout);
      clearTimeout(restoreBodyOverflowTimeout);
    };
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles['quotes-container']}>
        <motion.div className="open-quotes" initial={{ opacity: 0, scale: 0 }}>
          <AnimatePresence>
            {isOpenQuoteVisible && (
              <motion.div exit="exit" variants={letterVariant}>
                <QuotesIcon />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {isQuoteVisible && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sentenceVariant}
              exit="exit"
              className={styles.sentence}
            >
              {sentence.split(' ').map((word, index) => (
                <motion.span key={index} variants={letterVariant}>
                  {word} <motion.span></motion.span>
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="close-quotes" initial={{ opacity: 0, scale: 0 }}>
          <AnimatePresence>
            {isCloseQuoteVisible && (
              <motion.div exit="exit" variants={letterVariant}>
                <QuotesIcon rotate={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
