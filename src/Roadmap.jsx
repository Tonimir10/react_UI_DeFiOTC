import './Roadmap.css'

function Roadmap (){

  return(
<>
<div className="roadmap-container">
  <h2>Roadmap</h2>
  <div className="roadmap">
    <div className="column left">
      <div className="item">
        <span className="icon"></span>
        <span className="point"></span>
        <span className="label">Concept</span>
      </div>
      <div className="item">
        <span className="icon"></span>
        <span className="point"></span>
        <span className="label">Early Access</span>
      </div>
      <div className="item">
        <span className="icon"></span>
        <span className="point"></span>
        <span className="label">Marketing</span>
      </div>
    </div>

    <div className="center-node">OTCX</div>

    <div className="column right">
      <div className="item">
        <span className="icon"></span>
        <span className="point"></span>
        <span className="label">Contact</span>
      </div>
      <div className="item">
        <span className="icon"></span>
        <span className="point"></span>
        <span className="label">Branding</span>
      </div>
      <div className="item">
        <span className="icon"></span>
        <span className="point"></span>
        <span className="label">Public Launch</span>
      </div>
    </div>
  </div>
</div>


</>
  );

}
export default Roadmap;