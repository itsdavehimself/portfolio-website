import styles from './Skills.module.css';
import HtmlLogo from '../../components/icons/HtmlLogo';
import CssLogo from '../../components/icons/CssLogo';
import JsLogo from '../../components/icons/JsLogo';
import ReactLogo from '../../components/icons/ReactLogo';
import TailwindLogo from '../../components/icons/Tailwind';
import NodeLogo from '../../components/icons/NodeLogo';
import MongoLogo from '../../components/icons/MonogLogo';
import GitLogo from '../../components/icons/GitLogo';
import Cinema4dLogo from '../../components/icons/Cinema4dLogo';
import BlenderLogo from '../../components/icons/BlenderLogo';
import OctaneLogo from '../../components/icons/OctaneLogo';
import AfterEffectsLogo from '../../components/icons/AfterEffectsLogo';
import PremiereLogo from '../../components/icons/PremiereLogo';
import PhotoshopLogo from '../../components/icons/PhotoshopLogo';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import SassLogo from '../../components/icons/SassLogo';
import TsLogo from '../../components/icons/TsLogo';
import VitestLogo from '../../components/icons/VitestLogo';
import JestLogo from '../../components/icons/JestLogo';

export default function Skills() {
  const skillsContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillsContainer,
    offset: ['end 0.8', 'end .25'],
  });
  const { scrollYProgress: sidebarSlideInProgress } = useScroll({
    target: skillsContainer,
    offset: ['start end', 'start .4'],
  });
  const { scrollYProgress: sidebarSlideApartProgress } = useScroll({
    target: skillsContainer,
    offset: ['end end', 'start .3'],
  });

  return (
    <section ref={skillsContainer} id="#skills-section">
      <div
        className={styles['skills-container']}
        style={{ opacity: 1 - scrollYProgress.current }}
      >
        <aside className={styles['skills-aside']}>
          <div
            className={styles['skills-vertical']}
            style={{
              transform: `translateY(${Math.pow(
                sidebarSlideInProgress.current * 3.2,
                2,
              )}rem)`,
              opacity: sidebarSlideInProgress.current,
            }}
          >
            <span id={styles['skills-my']}>
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
            <div className={styles['skills-line-container']}>
              <div
                className={styles['skills-line']}
                style={{
                  left: `${(1 - sidebarSlideApartProgress.current) * -6}rem`,
                  marginLeft: `${3.6 * sidebarSlideApartProgress.current}rem`,
                  width: `${(1 - sidebarSlideApartProgress.current) * 19}rem`,
                }}
              ></div>
            </div>
            <span id={styles.skills}>
              <span
                style={{
                  display: 'inline-block',
                  transform: `translateX(${
                    sidebarSlideApartProgress.current * -10
                  }rem)`,
                }}
              >
                SKILLS
              </span>
            </span>
          </div>
        </aside>
        <div className={styles['skills-main']}>
          <h3
            className={styles['skills-main-header']}
            style={{
              opacity: 1 - sidebarSlideApartProgress.current,
              transform: `translateY(${
                sidebarSlideApartProgress.current * 10
              }rem)`,
            }}
          >
            WEB DEVELOPMENT
          </h3>
          <div
            className={styles['web-dev-logos']}
            style={{
              opacity: 1 - sidebarSlideApartProgress.current,
              transform: `translateY(${
                sidebarSlideApartProgress.current * 10
              }rem)`,
            }}
          >
            <div className={styles['main-icon']}>
              <HtmlLogo />
              HTML
            </div>
            <div className={styles['main-icon']}>
              <CssLogo />
              CSS
            </div>
            <div className={styles['main-icon']}>
              <JsLogo />
              Javascript
            </div>
            <div className={styles['main-icon']}>
              <TsLogo />
              TypeScript
            </div>
            <div className={styles['main-icon']}>
              <ReactLogo />
              React.js
            </div>
            <div className={styles['main-icon']}>
              <TailwindLogo />
              TailwindCSS
            </div>
            <div className={styles['main-icon']}>
              <SassLogo />
              Sass
            </div>
            <div className={styles['main-icon']}>
              <NodeLogo />
              Node.js
            </div>
            <div className={styles['main-icon']}>
              <MongoLogo />
              MongoDB
            </div>
            <div className={styles['main-icon']}>
              <VitestLogo />
              Vitest
            </div>
            <div className={styles['main-icon']}>
              <JestLogo />
              Jest
            </div>
            <div className={styles['main-icon']}>
              <GitLogo />
              Git
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <h3
              className={styles['skills-other-header']}
              style={{
                opacity:
                  1 - Math.pow(sidebarSlideApartProgress.current, 0.5) * 1.25,
                transform: `translateY(${
                  1 - sidebarSlideApartProgress.current * 15
                }rem)`,
              }}
            >
              OTHER SKILLS
            </h3>
            <div
              className={styles['other-logos']}
              style={{
                opacity:
                  1 - Math.pow(sidebarSlideApartProgress.current, 0.5) * 1.25,
                transform: `translateY(${
                  1 - sidebarSlideApartProgress.current * 15
                }rem)`,
              }}
            >
              <div className={styles['small-icon']}>
                <Cinema4dLogo />
                Cinema4D
              </div>
              <div className={styles['small-icon']}>
                <OctaneLogo /> Octane
              </div>
              <div className={styles['small-icon']}>
                <BlenderLogo /> Blender
              </div>
              <div className={styles['small-icon']}>
                <AfterEffectsLogo /> After Effects
              </div>
              <div className={styles['small-icon']}>
                <PhotoshopLogo /> Photoshop
              </div>
              <div className={styles['small-icon']}>
                <PremiereLogo /> Premiere
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
