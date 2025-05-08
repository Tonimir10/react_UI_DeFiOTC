import './App.css';
import HeroSection from '././Sections/HeroSection/HeroSection.jsx';
import TradingSection from '././Sections/TradingSection/TradingSection.jsx';
import Roadmap from '././Sections/RoadmapSection/Roadmap.jsx';
import CardSection from '././Sections/CardSection/CardSection.jsx';
import ClosingSection from './Sections/ClosingSection/ClosingSection.jsx';

function App() {
  return (
    <>
      <div className="App">
        <HeroSection />
        <TradingSection />
        <CardSection />
        <Roadmap />
        <ClosingSection />
      </div>
    </>
  );
}

export default App;
