import styles from './AboutMe.module.css';
import PropTypes from 'prop-types';
import { useContext, useState, useEffect } from 'react';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function AboutMe() {
  const { setType } = useContext(CustomCursorContext);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const aboutMeContainer = useRef(null);
  const { scrollYProgress: fadeOutProgress } = useScroll({
    target: aboutMeContainer,
    offset: ['end 0.8', 'end .3'],
  });
  const { scrollYProgress: mobileFadeOutProgress } = useScroll({
    target: aboutMeContainer,
    offset: ['start start', '1 start'],
  });
  const { scrollYProgress: sidebarSlideInProgress } = useScroll({
    target: aboutMeContainer,
    offset: ['start end', 'start .4'],
  });
  const { scrollYProgress: sidebarSlideApartProgress } = useScroll({
    target: aboutMeContainer,
    offset: ['end end', 'start .3'],
  });
  const { scrollYProgress: contentProgress } = useScroll({
    target: aboutMeContainer,
    offset: ['end end', 'start .2'],
  });

  const handleHoverResume = () => {
    setType('hover-social');
  };

  const handleHoverResumeLeave = () => {
    setType('default');
  };

  return (
    <section ref={aboutMeContainer} id="#about-me">
      <motion.div
        className={styles['about-me-container']}
        style={
          isSmallScreen
            ? { opacity: 1 - mobileFadeOutProgress.current }
            : { opacity: 1 - fadeOutProgress.current }
        }
      >
        <aside className={styles['about-me-aside']}>
          <div
            className={styles['about-me-vertical']}
            style={{
              transform: `translateY(${Math.pow(
                sidebarSlideInProgress.current * 3.2,
                2,
              )}rem)`,
              opacity: sidebarSlideInProgress.current,
            }}
          >
            <span id={styles.about}>
              <span
                style={{
                  display: 'inline-block',
                  transform: `translateX(${
                    sidebarSlideApartProgress.current * 10
                  }rem)`,
                }}
              >
                ABOUT
              </span>
            </span>
            <div className={styles['about-line-container']}>
              <div
                className={styles['about-line']}
                style={{
                  left: `${(1 - sidebarSlideApartProgress.current) * -4}rem`,
                  marginLeft: `${5.3 * sidebarSlideApartProgress.current}rem`,
                  width: `${(1 - sidebarSlideApartProgress.current) * 19}rem`,
                }}
              ></div>
            </div>

            <span id={styles.me}>
              <span
                style={{
                  display: 'inline-block',
                  transform: `translateX(${
                    sidebarSlideApartProgress.current * -10
                  }rem)`,
                }}
              >
                ME
              </span>
            </span>
          </div>
        </aside>
        <div className={styles['about-me-main']}>
          <h2 className={styles['about-me-header']}>
            <div
              style={{
                transform: `translateX(${contentProgress.current * -10}rem)`,
                opacity: 1 - contentProgress.current,
              }}
            >
              SYNTHESIZING
            </div>
            <div
              style={{
                transform: `translateX(${contentProgress.current * -10}rem)`,
                opacity: 1 - contentProgress.current,
              }}
            >
              CODE AND CREATIVITY
            </div>
          </h2>
          <div className={styles['about-me']}>
            <div className={styles.resume}>
              <button
                className={styles['resume-btn']}
                onMouseEnter={handleHoverResume}
                onMouseLeave={handleHoverResumeLeave}
                style={{ opacity: 1 - contentProgress.current * 2 }}
              >
                RESUME
              </button>
            </div>
            <div
              className={styles['about-me-paragraph']}
              style={{
                opacity: 1 - contentProgress.current,
                transform: `translateY(${contentProgress.current * 8}rem)`,
              }}
            >
              <p>
                Hey there, I&apos;m David—
                <span className={styles['about-me-emphasis']}>
                  a perpetual self-learner{' '}
                </span>
                and{' '}
                <span className={styles['about-me-emphasis']}>
                  full-stack developer
                </span>{' '}
                with a{' '}
                <span className={styles['about-me-emphasis']}>
                  passion for discovering
                </span>{' '}
                the latest web technologies and crafting captivating digital
                experiences.
              </p>
              <p>
                <span className={styles['about-me-emphasis']}>
                  With a B.A. in Psychology
                </span>
                , I enjoy approaching web development from the end-users&apos;
                perspective, merging my technical skill set with an
                understanding of human behavior to create{' '}
                <span className={styles['about-me-emphasis']}>
                  experiences that resonate
                </span>{' '}
                and elevate user satisfaction.
              </p>
              <p>
                <span className={styles['about-me-emphasis']}>
                  My curiosity extends beyond web development
                </span>{' '}
                into realms such as 3D modeling/animation, video editing, and
                sound design. As our digital worlds continue to expand, I look
                forward to{' '}
                <span className={styles['about-me-emphasis']}>
                  connecting these skills
                </span>{' '}
                and designing effective and memorable online experiences.
              </p>
              <p>
                With{' '}
                <span className={styles['about-me-emphasis']}>
                  seven years of experience in sales
                </span>{' '}
                and management roles throughout my professional journey,
                I&apos;m excited to{' '}
                <span className={styles['about-me-emphasis']}>
                  evolve into a new phase
                </span>{' '}
                of my adventure. I&apos;m{' '}
                <span className={styles['about-me-emphasis']}>
                  eager to join and collaborate
                </span>{' '}
                with passionate teams, and to leverage my diverse skill set in
                the creation of meaningful projects.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

AboutMe.propTypes = {
  scrollPosition: PropTypes.number,
};
