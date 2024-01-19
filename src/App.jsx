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

function App() {
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(null);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrollPosition(latest);
  });

  return (
    <CustomCursorContextProvider>
      <BrowserRouter>
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
                <Projects />
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
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </CustomCursorContextProvider>
  );
}

export default App;
