import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`} <MovingComponent type="typewriter" dataText={["Rosyid RIdho", "Frontend Developer", "a Web Developer", "a freelancer"]} />
    </h1>
  );
};
export default AnimationText;
