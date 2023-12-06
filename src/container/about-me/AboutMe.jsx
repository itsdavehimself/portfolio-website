import styles from './AboutMe.module.css';
import PropTypes from 'prop-types';
import AboutMeSideAnimation from '../../components/about-me-side-animation/AboutMeSideAnimation';

export default function AboutMe({ scrollPosition }) {
  return (
    <section className={styles['about-me-container']}>
      <aside className={styles['about-me-aside']}>
        <AboutMeSideAnimation />
      </aside>
      <div className={styles['about-me-main']}>
        <h2 className={styles['about-me-header']}>
          <div>DIGITAL MAKER</div>
          <div>SYNTHESIZING CODE AND CREATIVITY</div>
        </h2>
        <div className={styles['about-me']}>
          <div className={styles['about-me-paragraph']}>
            <p>
              Hey there, I&apos;m David—a perpetual self-learner and full-stack
              developer with a passion for discovering the latest web
              technologies and crafting captivating digital experiences.
            </p>
            <p>
              With a B.A. in Psychology, I enjoy approaching web development
              from the end-users&apos; perspective, merging my technical skill
              set with an understanding of human behavior to create experiences
              that resonate and elevate user satisfaction.
            </p>
            <p>
              My curiosity extends beyond web development into realms such as 3D
              modeling/animation, video editing, and sound design. As our
              digital worlds continue to expand, I look forward to connecting
              these skills and designing effective and memorable online
              experiences.
            </p>
            <p>
              With seven years of experience in sales and management roles
              throughout my professional journey, I&apos;m excited to evolve
              into a new phase of my adventure. I&apos;m eager to join and
              collaborate with passionate teams, and to leverage my diverse
              skill set in the creation of meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

AboutMe.propTypes = {
  scrollPosition: PropTypes.number,
};
