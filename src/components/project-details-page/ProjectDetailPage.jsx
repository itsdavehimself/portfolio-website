import CustomCursor from '../../components/custom-cursor/CustomCursor';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectDetailPage.module.css';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProjectDetailPage = ({
  projectName,
  projectDescription,
  techStack,
  year,
  imgSrc,
  imgAlt,
  keyFeatures,
  challenges,
  repoURL,
  liveURL,
}) => {
  const { setType } = useContext(CustomCursorContext);
  const customEase = [0.16, 0.5, 0.2, 1];

  const handleNavBtnHover = () => {
    setType('nav-hover');
  };

  const handleNavBtnHoverLeave = () => {
    setType('default');
  };

  useEffect(() => {
    setType('default');
  }, []);

  const createVariant = (delay) => ({
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: { delay, duration: 0.75, ease: customEase },
        opacity: { delay, duration: 0.75, ease: customEase },
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  });

  return (
    <>
      <CustomCursor />
      <div className={styles['project-details-container']}>
        <nav className={styles['project-details-navbar']}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={createVariant(1)}
            className={styles['home-nav']}
          >
            <Link to="/">
              <button
                onMouseEnter={handleNavBtnHover}
                onMouseLeave={handleNavBtnHoverLeave}
                className={styles['home-btn']}
              >
                HOME
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={createVariant(1)}
            className={styles['project-nav']}
          >
            <a href={repoURL} target="_blank" rel="noreferrer">
              <button
                onMouseEnter={handleNavBtnHover}
                onMouseLeave={handleNavBtnHoverLeave}
                className={styles['pill-btn']}
              >
                PROJECT REPO
              </button>
            </a>
            <a href={liveURL} target="_blank" rel="noreferrer">
              <button
                onMouseEnter={handleNavBtnHover}
                onMouseLeave={handleNavBtnHoverLeave}
                className={styles['pill-btn']}
              >
                LIVE SITE
              </button>
            </a>
          </motion.div>
        </nav>
        <div className={styles['project-details-hero']}>
          <div className={styles['project-details']}>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={createVariant(0.85)}
            >
              {projectName}
            </motion.h2>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={createVariant(0.75)}
              className={styles['info-block']}
            >
              <p>{projectDescription}</p>
            </motion.div>
          </div>
          <div className={styles['tech-block']}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={createVariant(0.85)}
              className={styles['info-block']}
            >
              <h3>TECH STACK</h3>
              <div className={styles['tech-stack']}>
                {techStack.map((tech, index) => (
                  <div className={styles['tech-bubble']} key={index}>
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={createVariant(0.75)}
              className={styles['info-block']}
            >
              <h3>YEAR</h3>
              <p>{year}</p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={createVariant(0.65)}
          className={styles['project-img-container']}
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className={styles['project-img-landscape']}
          ></img>
        </motion.div>
        <div className={styles['features-challenges-container']}>
          <div className={styles['info-block']}>
            <h3>KEY FEATURES</h3>
            <ul className={styles['info-list']}>
              {keyFeatures.map((feature, index) => (
                <li key={index} className={styles['info-item']}>
                  <span className={styles['list-bold']}>{feature.name}</span>{' '}
                  {feature.description}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles['info-block']}>
            <h3>CHALLENGES</h3>
            <ul className={styles['info-list']}>
              {challenges.map((challenge, index) => (
                <li key={index} className={styles['info-item']}>
                  <span className={styles['list-bold']}>{challenge.name}</span>{' '}
                  {challenge.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

ProjectDetailPage.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  techStack: PropTypes.array,
  year: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  keyFeatures: PropTypes.array,
  challenges: PropTypes.array,
  repoURL: PropTypes.string,
  liveURL: PropTypes.string,
};

export default ProjectDetailPage;
