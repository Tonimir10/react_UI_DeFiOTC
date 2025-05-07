import './TradingSection.css';
import TradingCard from './TradingCard/Card.jsx';

function TradingDiv() {
  return (
    <>
      <div className="container">
        <div className="text">
          <p>
            Take part in public, private or crowdfill deals. Negotiate private one-to-one deals with
            our secure chat. Setup your private deal and invite your partner via secure sharable
            link your private deal and invite your partner via secure sharable link
          </p>
          <span>PERSON PERSON</span>
          <span>0101</span>
        </div>
        <TradingCard />
      </div>
    </>
  );
}

export default TradingDiv;
