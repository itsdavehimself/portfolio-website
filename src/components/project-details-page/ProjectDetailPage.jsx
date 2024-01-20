import CustomCursor from '../../components/custom-cursor/CustomCursor';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectDetailPage.module.css';
import PropTypes from 'prop-types';

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

  const handleNavBtnHover = () => {
    setType('nav-hover');
  };

  const handleNavBtnHoverLeave = () => {
    setType('default');
  };

  useEffect(() => {
    setType('default');
  }, []);

  return (
    <>
      <CustomCursor />
      <div className={styles['project-details-container']}>
        <nav className={styles['project-details-navbar']}>
          <div className={styles['home-nav']}>
            <Link to="/">
              <button
                onMouseEnter={handleNavBtnHover}
                onMouseLeave={handleNavBtnHoverLeave}
                className={styles['home-btn']}
              >
                HOME
              </button>
            </Link>
          </div>
          <div className={styles['project-nav']}>
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
          </div>
        </nav>
        <div className={styles['project-details-hero']}>
          <div className={styles['project-details']}>
            <h2>{projectName}</h2>
            <div className={styles['info-block']}>
              <p>{projectDescription}</p>
            </div>
          </div>
          <div className={styles['tech-block']}>
            <div className={styles['info-block']}>
              <h3>TECH STACK</h3>
              <div className={styles['tech-stack']}>
                {techStack.map((tech, index) => (
                  <div className={styles['tech-bubble']} key={index}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles['info-block']}>
              <h3>YEAR</h3>
              <p>{year}</p>
            </div>
          </div>
        </div>
        <div className={styles['project-img-container']}>
          <img
            src={imgSrc}
            alt={imgAlt}
            className={styles['project-img-landscape']}
          ></img>
        </div>
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
