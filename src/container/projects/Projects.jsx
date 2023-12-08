import styles from './Projects.module.css';
import { useContext } from 'react';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';

export default function Projects() {
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

  const handleHoverProject = () => {
    setType('hover-project');
  };

  const handleHoverProjectLeave = () => {
    setType('default');
  };

  return (
    <section ref={projectsContainer}>
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
              <h3
                onMouseEnter={handleHoverProject}
                onMouseLeave={handleHoverProjectLeave}
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
            </div>
            <div className={styles['project-title-container']}>
              <h3
                onMouseEnter={handleHoverProject}
                onMouseLeave={handleHoverProjectLeave}
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
            </div>
            <div className={styles['project-title-container']}>
              <h3
                onMouseEnter={handleHoverProject}
                onMouseLeave={handleHoverProjectLeave}
                className={styles['project-title']}
                style={{
                  transform: `translateY(${
                    projectTitleProgress.current * 8
                  }rem)`,
                  opacity: 1 - projectTitleProgress.current,
                }}
              >
                BATTLESHIP
              </h3>
            </div>
          </div>
          <div className={styles['projects-description']}></div>
        </div>
      </div>
    </section>
  );
}
