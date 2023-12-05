import './App.css';
import { CustomCursorContextProvider } from './context/CustomCursorContext';
import CustomCursor from './components/custom-cursor/CustomCursor';
import HeroSection from './container/hero-section/HeroSection';
import AboutMe from './container/about-me/AboutMe';
import SideDots from './components/side-dots/SideDots';
import Work from './container/work/Work';
import Skills from './container/skills/Skills';
import ContactMe from './container/contact-me/ContactMe';

function App() {
  return (
    <CustomCursorContextProvider>
      <div className="App">
        <CustomCursor />
        <SideDots />
        <HeroSection />
        <AboutMe />
        <Work />
        <Skills />
        <ContactMe />
      </div>
    </CustomCursorContextProvider>
  );
}

export default App;
