import './App.css';
import { CustomCursorContextProvider } from './context/CustomCursorContext';
import CustomCursor from './components/custom-cursor/CustomCursor';
import HeroSection from './components/hero-section/HeroSection';
import AboutMe from './components/about-me/AboutMe';
import Navbar from './components/navbar/Navbar';
import SideDots from './components/side-dots/SideDots';
import ScrollDown from './components/scroll-down/ScrollDown';

function App() {
  return (
    <CustomCursorContextProvider>
      <div className="App">
        <CustomCursor />
        <SideDots />
        <HeroSection />
        <AboutMe />
      </div>
    </CustomCursorContextProvider>
  );
}

export default App;
