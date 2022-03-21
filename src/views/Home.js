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
        <h2 className="secHeader">Developers</h2>
        <Grid container>
          <Grid item xs={4}>
            <Container className="memberInfo">
            <b>Frontend</b>
            <li>Gabriela Cardona</li>
            <li>Zaneisha Estrella</li>
            <li>Génesis Torres</li>
            <li>Ricardo Storm</li>
            <li>Arnaldo Espinel</li>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Container className="memberInfo">
            <b>Backend</b>
            <li>Luis Colomba</li>
            <li>Bryan Torres</li>
            <li>Carlos Torres</li>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <br /> <br />
      <Container>
        <h2 className="secHeader">Links</h2>
        <div className="linkInfo">
        <b>Github</b> <br />
        <a href={"https://github.com/Colomba03/chemcamapp.github.io"}>https://github.com/Colomba03/chemcamapp.github.io</a>
        <br /> <br />
        <b>Trello</b> <br />
        <a href={"https://trello.com/b/eo9RFLjW/team-6-chemcam"}>https://trello.com/b/eo9RFLjW/team-6-chemcam</a>
        </div> <br />
      </Container>
    </Container>
  );
}

export default Home;