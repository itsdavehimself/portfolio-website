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
    <section ref={contactContainer}>
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
              initial={{ opacity: 0, transform: `translateY(5rem)` }}
              whileInView={{ opacity: 1, transform: `translateY(0)` }}
              transition={{ duration: 0.3 }}
              viewport={{ amount: 0.8 }}
            >
              <button
                className={styles['social-btn']}
                onMouseEnter={handleHoverEmail}
                onMouseLeave={handleHoverEmailLeave}
              >
                <div className={styles['social-icon']}>
                  <GithubLogo />
                </div>
              </button>
              <button
                className={styles['social-btn']}
                onMouseEnter={handleHoverEmail}
                onMouseLeave={handleHoverEmailLeave}
              >
                <div className={styles['social-icon']}>
                  <LinkedInLogo />
                </div>
              </button>
              <button
                className={styles['social-btn']}
                onMouseEnter={handleHoverEmail}
                onMouseLeave={handleHoverEmailLeave}
              >
                <div className={styles['social-icon']}>
                  <InstagramLogo />
                </div>
              </button>
            </motion.div>
            <motion.div
              className={styles.email}
              initial={{ opacity: 0, transform: `translateY(5rem)` }}
              whileInView={{ opacity: 1, transform: `translateY(0)` }}
              transition={{ duration: 0.4 }}
              viewport={{ amount: 0.8 }}
            >
              <button
                className={styles['email-btn']}
                onClick={handleEmailButtonClick}
                onMouseEnter={handleHoverEmail}
                onMouseLeave={handleHoverEmailLeave}
              >
                SEND DIGITAL MAIL
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
