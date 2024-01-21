import './App.css';
import { CustomCursorContextProvider } from './context/CustomCursorContext';
import {
  useScroll,
  useMotionValueEvent,
  motion,
  animate,
  easeInOut,
} from 'framer-motion';
import { useState, useEffect } from 'react';
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
import ScrollToTop from './utility/scrollToTop';
import {
  chainseekerDescription,
  chainseekerTechStack,
  chainseekerKeyFeatures,
  chainseekerChallenges,
} from './data/chainseeker-project-data';
import {
  shoppingCartDescription,
  shoppingCartTechStack,
  shoppingCartKeyFeatures,
  shoppingCartChallenges,
} from './data/shoppingcart-project-data';
import {
  rememberDescription,
  rememberTechStack,
  rememberKeyFeatures,
  rememberChallenges,
} from './data/remember-project-data';
import chainseekerLandscapeImg from './assets/chainseeker-mockup-landscape.jpg';
import shoppingCartLandscapeImg from './assets/1337market-mockup-landscape.jpg';
import rememberLandscapeImg from './assets/remember-mockup-landscape.jpg';
import SlideTransition from './components/slide-transition/SlideTransition';

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
        <div className="slider-div">
          {isTransitioning && (
            <SlideTransition isTransitioning={isTransitioning} />
          )}
        </div>
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
                imgSrc={chainseekerLandscapeImg}
                imgAlt={'chainseeker app'}
                keyFeatures={chainseekerKeyFeatures}
                challenges={chainseekerChallenges}
                repoURL={
                  'https://github.com/itsdavehimself/disc-golf-scorecard-app'
                }
                liveURL={'https://magical-jalebi-893a82.netlify.app/'}
              />
            }
          />
          <Route
            path="/projects/1337market"
            element={
              <ProjectDetailPage
                projectName={'1337MARKET'}
                projectDescription={shoppingCartDescription}
                techStack={shoppingCartTechStack}
                year={'2023'}
                imgSrc={shoppingCartLandscapeImg}
                imgAlt={'1337market app'}
                keyFeatures={shoppingCartKeyFeatures}
                challenges={shoppingCartChallenges}
                repoURL={'https://github.com/itsdavehimself/top-shopping-cart'}
                liveURL={'https://curious-gingersnap-75b4f3.netlify.app'}
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
                imgSrc={rememberLandscapeImg}
                imgAlt={'1337market app'}
                keyFeatures={rememberKeyFeatures}
                challenges={rememberChallenges}
                repoURL={'https://github.com/itsdavehimself/incremental-game'}
                liveURL={'https://mellifluous-sprinkles-ccda1b.netlify.app'}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </CustomCursorContextProvider>
  );
}

export default App;
