import styles from './Projects.module.css';
import { useContext, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import { useScroll, motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import chainseekerImg from '../../assets/chainseeker-mockup-portrait.jpg';
import renderCoveImg from '../../assets/rendercove-mockup-portrait.jpg';
import rememberImg from '../../assets/remember-mockup-portrait.jpg';
import propTypes from 'prop-types';

export default function Projects({ setIsTransitioning }) {
  const navigate = useNavigate();
  const navigateDelayTime = 1000;
  const [hoveredProject, setHoveredProject] = useState(null);
  const { setType } = useContext(CustomCursorContext);
  const projectsContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectsContainer,
    offset: ['end 0.8', 'end .35'],
  });
  const { scrollYProgress: sidebarSlideInProgress } = useScroll({
    target: projectsContainer,
    offset: ['start end', 'start .4'],
  });
  const { scrollYProgress: sidebarSlideApartProgress } = useScroll({
    target: projectsContainer,
    offset: ['end end', 'start .3'],
  });
  const { scrollYProgress: projectTitleProgress } = useScroll({
    target: projectsContainer,
    offset: ['start start', 'start .3'],
  });

  const handleHoverFirstProject = () => {
    setType('hover-project');
    setHoveredProject('first');
  };

  const handleHoverFirstProjectLeave = () => {
    setType('default');
    setHoveredProject(null);
  };

  const handleHoverSecondProject = () => {
    setType('hover-project');
    setHoveredProject('second');
  };

  const handleHoverSecondProjectLeave = () => {
    setType('default');
    setHoveredProject(null);
  };

  const handleHoverThirdProject = () => {
    setType('hover-project');
    setHoveredProject('third');
  };

  const handleHoverThirdProjectLeave = () => {
    setType('default');
    setHoveredProject(null);
  };

  const projectCardVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
    hidden: { opacity: 0, y: 50 },
    exit: { opacity: 0, y: 50, transition: { duration: 0.1 } },
  };

  const handleClick = useCallback(
    (to, delay) => {
      setIsTransitioning(true);

      setTimeout(() => {
        navigate(to);
      }, delay);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 3000);
    },
    [history],
  );

  return (
    <section ref={projectsContainer} id="#projects">
      <div
        className={styles['projects-container']}
        style={{ opacity: 1 - scrollYProgress.current }}
      >
        <aside className={styles['projects-aside']}>
          <div
            className={styles['projects-vertical']}
            style={{
              transform: `translateY(${Math.pow(
                sidebarSlideInProgress.current * 3.2,
                2,
              )}rem)`,
              opacity: sidebarSlideInProgress.current,
            }}
          >
            <span id={styles.my}>
              <span
                style={{
                  display: 'inline-block',
                  transform: `translateX(${
                    sidebarSlideApartProgress.current * 10
                  }rem)`,
                }}
              >
                MY
              </span>
            </span>
            <div className={styles['projects-line-container']}>
              <div
                className={styles['projects-line']}
                style={{
                  left: `${(1 - sidebarSlideApartProgress.current) * -6}rem`,
                  marginLeft: `${3.6 * sidebarSlideApartProgress.current}rem`,
                  width: `${(1 - sidebarSlideApartProgress.current) * 19}rem`,
                }}
              ></div>
            </div>
            <span id={styles.works}>
              <span
                style={{
                  display: 'inline-block',
                  transform: `translateX(${
                    sidebarSlideApartProgress.current * -10
                  }rem)`,
                }}
              >
                WORKS
              </span>
            </span>
          </div>
        </aside>
        <div className={styles['projects-main']}>
          <div className={styles['projects-titles']}>
            <div className={styles['project-title-container']}>
              <Link
                onClick={() =>
                  handleClick('/projects/luria', navigateDelayTime)
                }
              >
                <div
                  onMouseEnter={handleHoverThirdProject}
                  onMouseLeave={handleHoverThirdProjectLeave}
                  style={{
                    transform: `translateY(${
                      projectTitleProgress.current * 8
                    }rem)`,
                    opacity: 1 - projectTitleProgress.current,
                  }}
                >
                  <h3 className={styles['project-title']}>LURIA</h3>
                  <p className={styles['mobile-descriptions']}>
                    AI-Powered Flashcard Browser Extension
                  </p>
                </div>
              </Link>
            </div>
            <div className={styles['project-title-container']}>
              <Link
                onClick={() =>
                  handleClick('/projects/rendercove', navigateDelayTime)
                }
              >
                <div
                  onMouseEnter={handleHoverSecondProject}
                  onMouseLeave={handleHoverSecondProjectLeave}
                  style={{
                    transform: `translateY(${
                      projectTitleProgress.current * 8
                    }rem)`,
                    opacity: 1 - projectTitleProgress.current,
                  }}
                >
                  <h3 className={styles['project-title']}>RENDERCOVE</h3>
                  <p className={styles['mobile-descriptions']}>
                    FULL-STACK ART COMMUNITY PLATFORM
                  </p>
                </div>
              </Link>
            </div>
            <div className={styles['project-title-container']}>
              <Link
                onClick={() =>
                  handleClick('/projects/chainseeker', navigateDelayTime)
                }
              >
                <div
                  onMouseEnter={handleHoverFirstProject}
                  onMouseLeave={handleHoverFirstProjectLeave}
                  style={{
                    transform: `translateY(${
                      projectTitleProgress.current * 8
                    }rem)`,
                    opacity: 1 - projectTitleProgress.current,
                  }}
                >
                  <h3 className={styles['project-title']}>CHAINSEEKER</h3>
                  <p className={styles['mobile-descriptions']}>
                    FULL-STACK APPLICATION
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div
            className={styles['project-description']}
            style={{
              transform: `translateY(${projectTitleProgress.current * 8}rem)`,
              opacity: 1 - projectTitleProgress.current,
            }}
          >
            <AnimatePresence>
              {hoveredProject === 'first' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={projectCardVariant}
                  exit="exit"
                  className={styles['project-card']}
                >
                  <img
                    src={chainseekerImg}
                    alt="chainseeker app"
                    className={styles['project-image']}
                  ></img>
                  <div>Full-Stack Web App</div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {hoveredProject === 'second' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={projectCardVariant}
                  exit="exit"
                  className={styles['project-card']}
                >
                  <img
                    src={renderCoveImg}
                    alt="RenderCove"
                    className={styles['project-image']}
                  ></img>{' '}
                  <div> Full-Stack Art Community Platform</div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {hoveredProject === 'third' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={projectCardVariant}
                  exit="exit"
                  className={styles['project-card']}
                >
                  <img
                    src={rememberImg}
                    alt="Luria Project"
                    className={styles['project-image']}
                  ></img>{' '}
                  <div>AI-Powered Flashcard Browser Extension</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  setIsTransitioning: propTypes.func,
};
