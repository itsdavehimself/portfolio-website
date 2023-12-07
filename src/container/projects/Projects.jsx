import styles from './Projects.module.css';
import { useContext } from 'react';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import ProjectsHeader from '../../components/vertical-headers/projects-header/ProjectsHeader';

export default function Projects() {
  const { setType } = useContext(CustomCursorContext);

  const handleHoverProject = () => {
    setType('hover-project');
  };

  const handleHoverProjectLeave = () => {
    setType('default');
  };

  return (
    <section className={styles['projects-container']}>
      <aside className={styles['projects-aside']}>
        <ProjectsHeader />
      </aside>
      <div className={styles['projects-main']}>
        <div className={styles['projects-titles']}>
          <h3
            onMouseEnter={handleHoverProject}
            onMouseLeave={handleHoverProjectLeave}
            className={styles['project-title']}
          >
            CHAINSEEKER
          </h3>
          <h3
            onMouseEnter={handleHoverProject}
            onMouseLeave={handleHoverProjectLeave}
            className={styles['project-title']}
          >
            1337MARKET
          </h3>
          <h3
            onMouseEnter={handleHoverProject}
            onMouseLeave={handleHoverProjectLeave}
            className={styles['project-title']}
          >
            BATTLESHIP
          </h3>
        </div>
        <div className={styles['projects-description']}></div>
      </div>
    </section>
  );
}
