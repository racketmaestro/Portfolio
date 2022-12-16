import { TextLoop } from "react-text-loop-next";


const Cycletext = () => {
  return (
    <h2>
      <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
        <p style={{ color: "#77B4D4" }}>Muay Thai</p>
        <p style={{ color: "#77B4D4" }}>Hiking</p>
        <p style={{ color: "#77B4D4" }}>Tennis</p>
        <p style={{ color: "#77B4D4" }}>Playing Guitar</p>
        
      </TextLoop>{" "}
    </h2>
  );
};

export default Cycletext    