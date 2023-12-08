import styles from './Skills.module.css';
import HtmlLogo from '../../components/icons/HtmlLogo';
import CssLogo from '../../components/icons/CssLogo';
import JsLogo from '../../components/icons/JsLogo';
import ReactLogo from '../../components/icons/ReactLogo';
import TailwindLogo from '../../components/icons/Tailwind';
import NodeLogo from '../../components/icons/NodeLogo';
import MongoLogo from '../../components/icons/MonogLogo';
import NpmLogo from '../../components/icons/NpmLogo';
import GitLogo from '../../components/icons/GitLogo';
import TerminalLogo from '../../components/icons/TerminalLogo';
import JiraLogo from '../../components/icons/JiraLogo';
import FigmaLogo from '../../components/icons/FigmaLogo';
import Cinema4dLogo from '../../components/icons/Cinema4dLogo';
import BlenderLogo from '../../components/icons/BlenderLogo';
import OctaneLogo from '../../components/icons/OctaneLogo';
import AfterEffectsLogo from '../../components/icons/AfterEffectsLogo';
import PremiereLogo from '../../components/icons/PremiereLogo';
import PhotoshopLogo from '../../components/icons/PhotoshopLogo';
import MySkillsHeader from '../../components/vertical-headers/my-skills-header/MySkillsHeader';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';

export default function Skills() {
  const skillsContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillsContainer,
    offset: ['end 0.8', 'end .25'],
  });

  return (
    <section ref={skillsContainer}>
      <div
        className={styles['skills-container']}
        style={{ opacity: 1 - scrollYProgress.current }}
      >
        <aside className={styles['skills-aside']}>
          <MySkillsHeader />
        </aside>
        <div className={styles['skills-main']}>
          <h3 className={styles['skills-main-header']}>WEB DEVELOPMENT</h3>
          <div className={styles['web-dev-logos']}>
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
              <ReactLogo />
              React.js
            </div>
            <div className={styles['main-icon']}>
              <TailwindLogo />
              TailwindCSS
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
              <GitLogo />
              Git
            </div>
            <div className={styles['main-icon']}>
              <NpmLogo />
              npm
            </div>
            <div className={styles['main-icon']}>
              <TerminalLogo />
              Terminal
            </div>
            <div className={styles['main-icon']}>
              <JiraLogo />
              Jira
            </div>
            <div className={styles['main-icon']}>
              <FigmaLogo />
              Figma
            </div>
          </div>
          <h3 className={styles['skills-other-header']}>OTHER SKILLS</h3>
          <div className={styles['other-logos']}>
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
    </section>
  );
}
