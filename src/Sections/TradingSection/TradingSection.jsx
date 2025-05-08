import './TradingSection.css';
import TradingCard from '../../Componentes/TradingCard/TradingCard.jsx';

function TradingSection() {
  return (
    <>
      <div className="trading-section__container">
        <div className="left-side">
          <div className="highlight-text">
            Take part in public, private or crowdfill deals. Negotiate private one-to-one deals with
            our secure chat. <br />
            Setup your private deal and invite your partner via secure sharable link <br />
            your private deal and invite your partner via secure sharable link
          </div>

          <div className="scoreboard">
            <div>
              PERSON
              <br />
              <span style={{ fontSize: '80px' }}>01</span>
            </div>
            <div>
              PERSON
              <br />
              <span style={{ fontSize: '80px' }}>01</span>
            </div>
          </div>
        </div>
        <div className="tradingcard">
          <TradingCard />
        </div>
      </div>
    </>
  );
}

export default TradingSection;
