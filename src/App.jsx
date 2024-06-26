import './App.css';
import { CustomCursorContextProvider } from './context/CustomCursorContext';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import CustomCursor from './components/custom-cursor/CustomCursor';
import Navbar from './components/navbar/Navbar';
import HeroSection from './container/hero-section/HeroSection';
import AboutMe from './container/about-me/AboutMe';
import SideDots from './components/side-dots/SideDots';
import Projects from './container/projects/Projects';
import Skills from './container/skills/Skills';
import ContactMe from './container/contact-me/ContactMe';
import ProjectDetailPage from './components/project-details-page/ProjectDetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  chainseekerDescription,
  chainseekerTechStack,
  chainseekerKeyFeatures,
  chainseekerChallenges,
} from './data/chainseeker-project-data';
import {
  rendercoveDescription,
  rendercoveChallenges,
  rendercoveKeyFeatures,
  rendercoveTechstack,
} from './data/rendercove-project-data';
import {
  rememberDescription,
  rememberTechStack,
  rememberKeyFeatures,
  rememberChallenges,
} from './data/remember-project-data';
import chainseekerLandscapeImg from './assets/chainseeker-mockup-landscape.jpg';
import chainseekerPortraitImg from './assets/chainseeker-mockup-portrait.jpg';
import renderCoveLandscapeImg from './assets/rendercove-landscape-mockup.jpg';
import renderCovePortraitImg from './assets/rendercove-mockup-portrait.jpg';
import rememberLandscapeImg from './assets/remember-mockup-landscape.jpg';
import rememberPortraitImg from './assets/remember-mockup-portrait.jpg';
import SlideTransition from './components/slide-transition/SlideTransition';
import { ScrollToTop } from './utility/ScrollToTop';

function App() {
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrollPosition(latest);
  });

  return (
    <CustomCursorContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        {isTransitioning && (
          <div className="slider-div">
            <SlideTransition isTransitioning={isTransitioning} />
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <CustomCursor />
                <SideDots scrollPosition={scrollPosition} />
                <Navbar />
                <HeroSection scrollPosition={scrollPosition} />
                <AboutMe scrollPosition={scrollPosition} />
                <Projects setIsTransitioning={setIsTransitioning} />
                <Skills />
                <ContactMe />
              </div>
            }
          />
          <Route
            path="/projects/chainseeker"
            element={
              <ProjectDetailPage
                projectName={'CHAINSEEKER'}
                projectDescription={chainseekerDescription}
                techStack={chainseekerTechStack}
                year={'2023'}
                mobileImgSrc={chainseekerPortraitImg}
                imgSrc={chainseekerLandscapeImg}
                imgAlt={'chainseeker app'}
                keyFeatures={chainseekerKeyFeatures}
                challenges={chainseekerChallenges}
                repoURL={
                  'https://github.com/itsdavehimself/disc-golf-scorecard-app'
                }
                liveURL={'https://chainseeker.netlify.app/'}
              />
            }
          />
          <Route
            path="/projects/rendercove"
            element={
              <ProjectDetailPage
                projectName={'RENDERCOVE'}
                projectDescription={rendercoveDescription}
                techStack={rendercoveTechstack}
                year={'2024'}
                mobileImgSrc={renderCovePortraitImg}
                imgSrc={renderCoveLandscapeImg}
                imgAlt={'RenderCove app'}
                keyFeatures={rendercoveKeyFeatures}
                challenges={rendercoveChallenges}
                repoURL={'https://github.com/itsdavehimself/render-cove'}
                liveURL={'https://rendercove.netlify.app/'}
              />
            }
          />
          <Route
            path="/projects/remember"
            element={
              <ProjectDetailPage
                projectName={'RE:MEMBER'}
                projectDescription={rememberDescription}
                techStack={rememberTechStack}
                year={'2024'}
                mobileImgSrc={rememberPortraitImg}
                imgSrc={rememberLandscapeImg}
                imgAlt={'1337market app'}
                keyFeatures={rememberKeyFeatures}
                challenges={rememberChallenges}
                repoURL={'https://github.com/itsdavehimself/incremental-game'}
                liveURL={'https://remember.netlify.app'}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </CustomCursorContextProvider>
  );
}

export default App;
