import './ClosingBanner.css';
import Button from './Componentes/Button.jsx';

function PromoSection () {


    return(
        <>
        <section className="hero">
        <div className="overlay">
          <div className="text-container">
            <h1>
              Be the first <br />
              to experience next-gen <br />
              <span className="highlight">OTC trading.</span>
            </h1>
            <p>
              Trade smarter with XOTC — a secure platform offering deep
              liquidity and real-time insights for seamless OTC trading.
            </p>
            <div className="button">
            <Button text="Request Early Access" onClick={() => {}} variant="primary" />
            </div>
          </div>
        </div>
      </section>
        </>
    )

}

export default PromoSection;