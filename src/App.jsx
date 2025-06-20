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
  luriaChallenges,
  luriaDescription,
  luriaKeyFeatures,
  luriaTechStack,
} from './data/luria-project-data';
import chainseekerLandscapeImg from './assets/chainseeker-mockup-landscape.jpg';
import chainseekerPortraitImg from './assets/chainseeker-mockup-portrait.jpg';
import renderCoveLandscapeImg from './assets/rendercove-landscape-mockup.jpg';
import renderCovePortraitImg from './assets/rendercove-mockup-portrait.jpg';
import luriaLandscapeImg from './assets/luria-landscape-mockup.jpg';
import luriaPortraitImg from './assets/luria-mockup-portrait.jpg';
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
                {/* <SideDots scrollPosition={scrollPosition} /> */}
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
                loomOnly={false}
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
                loomOnly={false}
              />
            }
          />
          <Route
            path="/projects/luria"
            element={
              <ProjectDetailPage
                projectName={'LURIA'}
                projectDescription={luriaDescription}
                techStack={luriaTechStack}
                year={'2025'}
                mobileImgSrc={luriaPortraitImg}
                imgSrc={luriaLandscapeImg}
                imgAlt={'Luria app'}
                keyFeatures={luriaKeyFeatures}
                challenges={luriaChallenges}
                repoURL={'https://github.com/itsdavehimself/incremental-game'}
                liveURL={'https://remember.netlify.app'}
                loomOnly={true}
                loomURL={
                  'https://www.loom.com/share/2061a35a85014d7dad50f72c85345986'
                }
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </CustomCursorContextProvider>
  );
}

export default App;
