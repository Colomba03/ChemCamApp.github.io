import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./views.css";

function Home() {
  return (
    <Container className="mainFont">
      <Container className="generalInfo">
        <h1 className="title">CHEMCAM</h1>
        <div>
          University of Puerto Rico, Mayagüez Campus <br />
          Department of Computer Science and Engineering <br />
          Software Requirements <br />
          INSO 4115 <br /> <br />
        </div>
      </Container>
      <Container>
        <h2 className="members">Developers</h2>
        <Grid container>
          <Grid item xs={4}>
            <Container className="fullStack">
            <b>Frontend</b>
            <li>Gabriela Cardona</li>
            <li>Zaneisha Estrella</li>
            <li>Génesis Torres</li>
            <li>Ricardo Storm</li>
            <li>Arnaldo Espinel</li>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Container className="fullStack">
            <b>Backend</b>
            <li>Luis Colomba</li>
            <li>Bryan Torres</li>
            <li>Carlos Torres</li>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Home;