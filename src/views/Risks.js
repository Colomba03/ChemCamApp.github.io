import React from "react";
import { Container } from "@material-ui/core";
import risksTable from "../assets/risks.png";

function Risks() {
  return (
    <Container className="mainFont">
      <h2>Risks</h2>
      <div style={{ textAlign:"center" }}>
        <img src={risksTable} width="896px"></img>
      </div>
    </Container>
  );
}

export default Risks;