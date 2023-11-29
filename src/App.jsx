import './App.css';
import AboutMe from './components/about-me/AboutMe';
import HeroSection from './components/hero-section/HeroSection';
import { CustomCursorContextProvider } from './context/CustomCursorContext';
import CustomCursor from './components/custom-cursor/CustomCursor';

function App() {
  return (
    <CustomCursorContextProvider>
      <div className="App">
        <CustomCursor />
        <HeroSection />
        <AboutMe />
      </div>
    </CustomCursorContextProvider>
  );
}

export default App;
