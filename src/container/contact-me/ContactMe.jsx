import styles from './ContactMe.module.css';
import GithubLogo from '../../components/icons/GithubLogo';
import InstagramLogo from '../../components/icons/InstagramLogo';
import LinkedInLogo from '../../components/icons/LinkedInLogo';
import { useContext } from 'react';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';

export default function ContactMe() {
  const { setType } = useContext(CustomCursorContext);
  const contactContainer = useRef(null);
  const { scrollYProgress: sidebarSlideInProgress } = useScroll({
    target: contactContainer,
    offset: ['start end', 'start .4'],
  });
  const { scrollYProgress: sidebarSlideApartProgress } = useScroll({
    target: contactContainer,
    offset: ['end end', 'start .3'],
  });
  const { scrollYProgress: headerProgress } = useScroll({
    target: contactContainer,
    offset: ['end end', 'start .15'],
  });

  const { scrollYProgress: socialProgress } = useScroll({
    target: contactContainer,
    offset: ['end end', 'start start'],
  });

  const handleHoverEmail = () => {
    setType('hover-social');
  };

  const handleHoverEmailLeave = () => {
    setType('default');
  };

  const handleEmailButtonClick = () => {
    const emailAddress = 'davidsmolen@gmail.com';

    const mailtoLink = `mailto:${emailAddress}`;

    window.location.href = mailtoLink;
  };

  return (
    <section ref={contactContainer} id="#contact-section">
      <div className={styles['contact-container']}>
        <aside className={styles['contact-aside']}>
          <div
            className={styles['contact-vertical']}
            style={{
              transform: `translateY(${Math.pow(
                sidebarSlideInProgress.current * 3.2,
                2,
              )}rem)`,
              opacity: sidebarSlideInProgress.current,
            }}
          >
            <span id={styles.contact}>
              <span
                style={{
                  display: 'inline-block',
                  transform: `translateX(${
                    sidebarSlideApartProgress.current * 10
                  }rem)`,
                }}
              >
                CONTACT
              </span>
            </span>
            <div className={styles['contact-line-container']}>
              <div
                className={styles['contact-line']}
                style={{
                  left: `${(1 - sidebarSlideApartProgress.current) * -14.5}rem`,
                  marginLeft: `${-5.2 * sidebarSlideApartProgress.current}rem`,
                  width: `${(1 - sidebarSlideApartProgress.current) * 19}rem`,
                }}
              ></div>
            </div>
            <span id={styles['me-contact']}>
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
        <div className={styles['contact-main']}>
          <div className={styles['contact-title']}>
            <h2
              style={{
                opacity: 1 - headerProgress.current,
                transform: `translateY(${
                  sidebarSlideApartProgress.current * 20
                }rem)`,
              }}
            >
              CONNECTION PATHWAYS
            </h2>
          </div>
          <div className={styles['contact-links']}>
            <motion.div
              className={styles.socials}
              style={{
                transform: `translateY(${socialProgress.current * 8}rem)`,
                opacity: 1 - socialProgress.current,
              }}
            >
              <a
                href="https://github.com/itsdavehimself"
                target="_blank"
                className={styles['social-btn']}
                onMouseEnter={handleHoverEmail}
                onMouseLeave={handleHoverEmailLeave}
                rel="noreferrer"
              >
                <div className={styles['social-icon']}>
                  <GithubLogo />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/david-smolen-40a979110/"
                target="_blank"
                className={styles['social-btn']}
                onMouseEnter={handleHoverEmail}
                onMouseLeave={handleHoverEmailLeave}
                rel="noreferrer"
              >
                <div className={styles['social-icon']}>
                  <LinkedInLogo />
                </div>
              </a>
              <a
                href="https://instagram.com/itsdavehimself/"
                target="_blank"
                className={styles['social-btn']}
                onMouseEnter={handleHoverEmail}
                onMouseLeave={handleHoverEmailLeave}
                rel="noreferrer"
              >
                <div className={styles['social-icon']}>
                  <InstagramLogo />
                </div>
              </a>
            </motion.div>
            <motion.div
              className={styles.email}
              style={{
                transform: `translateY(${socialProgress.current * 4}rem)`,
                opacity: 1 - socialProgress.current,
              }}
            >
              <button
                className={styles['email-btn']}
                onClick={handleEmailButtonClick}
                onMouseEnter={handleHoverEmail}
                onMouseLeave={handleHoverEmailLeave}
              >
                LET&apos;S TALK
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
