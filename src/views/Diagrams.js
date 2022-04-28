import React from "react";
import { Container } from "@material-ui/core";
import useCase from "../assets/use-case.png";
import roughSketch from "../assets/rough-sketch.png";
import roughER from "../assets/rough-er.png";
import classDiagram from "../assets/class-diagram.png";
import componentDesign from "../assets/comp-design.png";

function Diagrams() {
  return (
    <Container className="mainFont">
      <h2>Diagrams</h2> <br />
      <h3>Use Case Diagram</h3>
      <div style={{ textAlign:"center" }}>
        <img src={useCase} width="896px"></img>
      </div> <br /> <br />
      <h3>Class Diagram</h3>
      <div style={{ textAlign:"center" }}>
        <img src={classDiagram} width="896px"></img>
      </div> <br /> <br />
      <h3>Rough Domain Sketch</h3>
      <div style={{ textAlign:"center" }}>
        <img src={roughSketch} width="896px"></img>
      </div> <br /> <br />
      <h3>Rough Entity-Relationship Diagram</h3>
      <div style={{ textAlign:"center" }}>
        <img src={roughER} width="896px"></img>
      </div> <br /> <br />
      <h3>Software Component Design</h3>
      <div style={{ textAlign:"center" }}>
        <img src={componentDesign} width="592x"></img>
      </div> <br /> <br />
    </Container>
  );
}

export default Diagrams;