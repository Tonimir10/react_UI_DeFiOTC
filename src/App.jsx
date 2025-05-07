import HeroSection from './HeroSection';
import './App.css';
import TradingDiv from './TradingSection.jsx';
import Roadmap from './Roadmap.jsx';
import CardSection from './CardSection.jsx';

function App() {
  return (
    <>
      <div className="App">
        <HeroSection />
        <TradingDiv />
        <CardSection />
        <Roadmap />
      </div>
    </>
  );
}

export default App;
