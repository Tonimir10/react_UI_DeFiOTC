import bgImage from './assets/bg-hero.png';
import HeroSection from './HeroSection';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <HeroSection
          backgroundImage={bgImage}
          accentColor="#A2FF00"
          title="DeFi OTC Trading for Everyone"
          highlightWord="Everyone"
          subtitle="Trade tokens off-market without price impact or slippage"
          primaryCta="Request Early Access"
          secondaryCta="Learn More"
        />
      </div>
    </>
  );
}

export default App;
