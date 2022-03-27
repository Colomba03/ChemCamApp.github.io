import React from "react";
import { Container } from "@material-ui/core";
import softwareArchDesign from "../assets/soft-arch.png";

function Architecture() {
  return (
    <Container className="mainFont">
      <h2>Software Architecture Design</h2>
      <div style={{ textAlign:"center" }}>
        <img src={softwareArchDesign} width="896px"></img>
      </div>
    </Container>
  );
}

export default Architecture;