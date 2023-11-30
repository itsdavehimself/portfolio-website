import './App.css';
import HeroSection from './components/hero-section/HeroSection';
import { CustomCursorContextProvider } from './context/CustomCursorContext';
import CustomCursor from './components/custom-cursor/CustomCursor';

function App() {
  return (
    <CustomCursorContextProvider>
      <div className="App">
        <CustomCursor />
        <HeroSection />
      </div>
    </CustomCursorContextProvider>
  );
}

export default App;
