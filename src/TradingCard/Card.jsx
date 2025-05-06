import './Card.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function TradingCard() {
  return (
    <div className="container mt-5 text-start d-flex ">
      <Card
        className="bg-dark text-white rounded-3 "
        style={{ width: '24rem', border: '2px solid #6e7a4b' }}
      >
        <ListGroup variant="flush">
          <ListGroup.Item className="list-item-equal-measures list-item-equal-height">
            <p className="fw-bold">PEPE: 20,000,000</p>
            <p className="fw-bold text-success">VALUE: $22,500</p>
            <p className="right-items-card">ACCEPT TRADE</p>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center list-item-equal-measures list-item-equal-height">
            <p className="fw-bold text-success ">VALUE: $22,500</p>
            <p className="right-items-card">ACCEPT TRADE</p>
          </ListGroup.Item>
          <ListGroup.Item className="list-item-equal-measures list-item-equal-height">
            <p className="fw-bold ">PEPE: 20,000,000</p>
            <p className="fw-bold text-success">VALUE: $22,500</p>
            <p className="right-items-card-button">ACCEPTED</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default TradingCard;
