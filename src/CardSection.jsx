import './CardSection.css';

function CardSection() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="network">
            <div className="node top-left">
              <div className="border"></div>
              <div className="circle"></div>
            </div>
            <div className="node top-right">
              <div className="border"></div>
              <div className="circle"></div>
            </div>
            <div className="node mid-left">
              <div className="border"></div>
              <div className="circle"></div>
            </div>
            <div className="center-icon">🤝</div>
            <div className="node mid-right">
              <div className="border"></div>
              <div className="circle"></div>
            </div>
            <div className="node bottom-left">
              <div className="border"></div>
              <div className="circle"></div>
            </div>
            <div className="node bottom-right">
              <div className="border"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="card-content">
            <h2>Safe Low-Cost Trading</h2>
            <p>Secure trading with audited contracts and low fees.</p>
          </div>
        </div>

        <div className="card">
          <div className="network">
            <div className="node2 top-left">
              <div className="border"></div>
              <div className="circle"></div>
            </div>
            <div className="node2 top-right">
              <div className="border"></div>
              <div className="circle"></div>
            </div>

            <div className="center-icon">👥</div>

            <div className="node2 bottom-left2">
              <div className="border"></div>
              <div className="circle"></div>
            </div>
            <div className="node2 bottom-right2">
              <div className="border"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="card-content">
            <h2>Crowd fill Fundraising</h2>
            <p>Team acces funds via secure crowd fills</p>
          </div>
        </div>

        <div className="card">
          <div className="network">
            <div className="center-icon">📈</div>
          </div>
          <div className="card-content">
            <h2>Safe trading, No exploits</h2>
            <p>No more front-runs or sandwich attacks on DEXs</p>
          </div>
        </div>

        <div className="card">
          <div className="network">
            <div className="center-icon">🤖</div>
          </div>
          <div className="card-content">
            <h2>Trade in presale markets</h2>
            <p>Presale markets allow trading illiquid</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSection;
