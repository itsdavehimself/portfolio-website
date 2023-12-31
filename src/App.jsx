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

function App() {
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(null);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrollPosition(latest);
  });

  return (
    <CustomCursorContextProvider>
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
    </CustomCursorContextProvider>
  );
}

export default App;
