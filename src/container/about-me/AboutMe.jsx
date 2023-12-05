import styles from './AboutMe.module.css';
import PropTypes from 'prop-types';

export default function AboutMe({ scrollPosition }) {
  return (
    <section className={styles.container}>
      <div>About Me</div>
    </section>
  );
}

AboutMe.propTypes = {
  scrollPosition: PropTypes.number,
};
