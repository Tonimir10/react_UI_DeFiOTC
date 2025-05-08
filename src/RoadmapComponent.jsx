function RoadmapComponent(props){
return(
    <>
    <div className="item">
        <span className="icon"></span>
        <span className="point"></span>
        <span className="label">{props.txt}</span>
      </div>
      </>
);
}
export default RoadmapComponent