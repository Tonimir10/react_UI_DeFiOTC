import './ClosingSection.css';
import Button from '../../Componentes/Button/Button.jsx';

function ClosingSection() {
  return (
    <>
      <section className="closing-section__hero">
        <div className="overlay">
          <p className="closing-section__hero-text">
            Trade smarter with XOTC — a secure platform offering deep liquidity and real-time
            insights for seamless OTC trading.
          </p>
          <div className="text-container">
            <h1>
              Be the first <br />
              to experience next-gen <br />
              <div className="closing-section__cta">
                <Button text="Request Early Access" onClick={() => {}} variant="primary" />
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
