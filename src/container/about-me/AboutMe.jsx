import styles from './AboutMe.module.css';
import PropTypes from 'prop-types';
import AboutMeHeader from '../../components/vertical-headers/about-me-header/AboutMeHeader';

export default function AboutMe({ scrollPosition }) {
  return (
    <section className={styles['about-me-container']}>
      <aside className={styles['about-me-aside']}>
        <AboutMeHeader />
      </aside>
      <div className={styles['about-me-main']}>
        <h2 className={styles['about-me-header']}>
          <div>DIGITAL MAKER</div>
          <div>SYNTHESIZING CODE AND CREATIVITY</div>
        </h2>
        <div className={styles['about-me']}>
          <div className={styles['about-me-paragraph']}>
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
              perspective, merging my technical skill set with an understanding
              of human behavior to create{' '}
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
              and management roles throughout my professional journey, I&apos;m
              excited to{' '}
              <span className={styles['about-me-emphasis']}>
                evolve into a new phase
              </span>{' '}
              of my adventure. I&apos;m{' '}
              <span className={styles['about-me-emphasis']}>
                eager to join and collaborate
              </span>{' '}
              with passionate teams, and to leverage my diverse skill set in the
              creation of meaningful projects.
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
