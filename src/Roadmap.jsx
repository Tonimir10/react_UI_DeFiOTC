import './Roadmap.css'
import './RoadmapComponent'
import RoadmapComponent from './RoadmapComponent';
function Roadmap (){

  return(
<>
<div className="roadmap-container">
  <h2>Roadmap</h2>
  <div className="roadmap">
    <div className="column left">
      <RoadmapComponent txt='Concept'/>
      <RoadmapComponent txt='Early Access'/>
      <RoadmapComponent txt='Marketing'/>
    </div>

    <div className="center-node">OTCX</div>

    <div className="column right">
    <RoadmapComponent txt='Contact'/>
    <RoadmapComponent txt='Branding'/>
    <RoadmapComponent txt='Public Launch'/>
    </div>
  </div>
</div>


</>
  );

}
export default Roadmap;