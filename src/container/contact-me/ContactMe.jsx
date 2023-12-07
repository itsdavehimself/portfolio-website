import styles from './ContactMe.module.css';
import ContactHeader from '../../components/vertical-headers/contact-header/ContactHeader';
import GithubLogo from '../../components/icons/GithubLogo';
import InstagramLogo from '../../components/icons/InstagramLogo';
import LinkedInLogo from '../../components/icons/LinkedInLogo';
import { useContext } from 'react';
import { CustomCursorContext } from '../../context/CustomCursorContext';

export default function ContactMe() {
  const { setType } = useContext(CustomCursorContext);

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
    <section className={styles['contact-container']}>
      <aside className={styles['contact-aside']}>
        <ContactHeader />
      </aside>
      <div className={styles['contact-main']}>
        <div className={styles['contact-title']}>
          <h2>CONNECTION PATHWAYS</h2>
        </div>
        <div className={styles['contact-links']}>
          <div className={styles.socials}>
            <button
              className={styles['social-btn']}
              onMouseEnter={handleHoverEmail}
              onMouseLeave={handleHoverEmailLeave}
            >
              <GithubLogo />
            </button>
            <button
              className={styles['social-btn']}
              onMouseEnter={handleHoverEmail}
              onMouseLeave={handleHoverEmailLeave}
            >
              <LinkedInLogo />
            </button>
            <button
              className={styles['social-btn']}
              onMouseEnter={handleHoverEmail}
              onMouseLeave={handleHoverEmailLeave}
            >
              <InstagramLogo />
            </button>
          </div>
          <div className={styles.email}>
            <button
              className={styles['email-btn']}
              onClick={handleEmailButtonClick}
              onMouseEnter={handleHoverEmail}
              onMouseLeave={handleHoverEmailLeave}
            >
              DIGITAL MAIL ME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
