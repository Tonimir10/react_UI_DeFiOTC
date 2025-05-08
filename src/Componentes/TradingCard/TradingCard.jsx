import './TradingCard.css';

function TradingCard() {
  return (
    <>
      <div className="trading-card-container">
        <div className="list-group">
          <div>
            <p className="fw-bold">PEPE: 20,000,000</p>
            <p className="fw-bold text-success">VALUE: $22,500</p>
          </div>
          <p className="right-items-card">ACCEPT TRADE</p>
        </div>
        <hr />
        <div className="list-group">
          <div>
            <p className="fw-bold text-success ">VALUE: $22,500</p>
          </div>
          <p className="right-items-card">ACCEPT TRADE</p>
        </div>
        <hr />
        <div className="list-group">
          <div>
            <p className="fw-bold ">PEPE: 20,000,000</p>
            <p className="fw-bold text-success">VALUE: $22,500</p>
          </div>
          <p className="right-items-card-button boton">ACCEPTED</p>
        </div>
      </div>
    </>
  );
}

export default TradingCard;
