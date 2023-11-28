import './App.css';
import AboutMe from './components/about-me/AboutMe';
import HeroSection from './components/hero-section/HeroSection';
import CircleComponent from './components/circle-component/CircleComponent';

function App() {
  return (
    <CircleComponent>
      <>
        <HeroSection />
        <AboutMe />
      </>
    </CircleComponent>
  );
}

export default App;
