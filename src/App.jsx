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
import ChainseekerPage from './container/chainseeker-page/ChainseekerPage';
import ShoppingCartPage from './container/shopping-cart-page/ShoppingCartPage';
import RememberPage from './container/remember-page/RememberPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
          <Route path="/projects/chainseeker" element={<ChainseekerPage />} />
          <Route path="/projects/1337market" element={<ShoppingCartPage />} />
          <Route path="/projects/remember" element={<RememberPage />} />
        </Routes>
      </BrowserRouter>
    </CustomCursorContextProvider>
  );
}

export default App;
