import './ClosingSection.css';
import Button from '../../Componentes/Button/Button.jsx';
import { alert4 } from '../../Componentes/Alert/Alert.jsx';
function ClosingSection() {
  return (
    <>
      <section className="closing-section__hero">
        <div className="overlay">
          <div className="closing-section__hero-text-container">
            <p className="closing-section__hero-text">
              Trade smarter with XOTC — a secure platform offering deep liquidity and real-time
              insights for seamless OTC trading.
            </p>
          </div>
          <div className="closing-section__cta-container">
            <h1 style={{ fontSize: '4rem' }}>
              Be the first <br />
              to experience next-gen <br />
              <div className="closing-section__cta">
                <Button text="Request Early Access" onClick={alert4} variant="closing-btn" />
                <span>OTC trading.</span>
              </div>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClosingSection;
