import styles from './Projects.module.css';
import { CustomCursorContextProvider } from '../../context/CustomCursorContext';
import { useContext, useRef, useState } from 'react';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import { useScroll, motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import chainseekerImg from '../../assets/chainseeker-mockup-portrait.jpg';
import shoppingCartImg from '../../assets/1337market-mockup-portrait.jpg';
import rememberImg from '../../assets/remember-mockup-portrait.jpg';

export default function Projects() {
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
              <Link to="/projects/chainseeker">
                <h3
                  onMouseEnter={handleHoverFirstProject}
                  onMouseLeave={handleHoverFirstProjectLeave}
                  className={styles['project-title']}
                  style={{
                    transform: `translateY(${
                      projectTitleProgress.current * 8
                    }rem)`,
                    opacity: 1 - projectTitleProgress.current,
                  }}
                >
                  CHAINSEEKER
                </h3>
              </Link>
            </div>
            <div className={styles['project-title-container']}>
              <Link to="/projects/1337market">
                <h3
                  onMouseEnter={handleHoverSecondProject}
                  onMouseLeave={handleHoverSecondProjectLeave}
                  className={styles['project-title']}
                  style={{
                    transform: `translateY(${
                      projectTitleProgress.current * 8
                    }rem)`,
                    opacity: 1 - projectTitleProgress.current,
                  }}
                >
                  1337MARKET
                </h3>
              </Link>
            </div>
            <div className={styles['project-title-container']}>
              <Link to="/projects/remember">
                <h3
                  onMouseEnter={handleHoverThirdProject}
                  onMouseLeave={handleHoverThirdProjectLeave}
                  className={styles['project-title']}
                  style={{
                    transform: `translateY(${
                      projectTitleProgress.current * 8
                    }rem)`,
                    opacity: 1 - projectTitleProgress.current,
                  }}
                >
                  RE:MEMBER
                </h3>
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
                    src={shoppingCartImg}
                    alt="1337Market Project"
                    className={styles['project-image']}
                  ></img>{' '}
                  <div> Frontend Shopping Cart</div>
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
                    alt="1337Market Project"
                    className={styles['project-image']}
                  ></img>{' '}
                  <div>Incremental/Idle Browser Game</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
