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
          INSO 4115
        </div>
      </Container>
      <br /> <br />
      <Container>
        <h2 className="secHeader">Contact Information</h2>
        <div className="homeInfo">
        <b>Email</b> <br />
        <div>chemcamapp@gmail.com</div>
        <br />
        <b>Phone</b> <br />
        <div>(787)-208-0252</div>
        </div>
      </Container>
      <br /> <br />
      <Container>
        <h2 className="secHeader">Developers</h2>
        <Grid container>
          <Grid item xs={3} />
          <Grid item xs={3}>
          <b className="stack">Frontend</b>
            <Container className="memberInfo">
            <li>Zaneisha Estrella</li>
            <li>Génesis Torres</li>
            <li>Ricardo Storm</li>
            <li>Arnaldo Espinel</li>
            </Container>
          </Grid>
          <Grid item xs={3}>
          <b className="stack">Backend</b>
            <Container className="memberInfo">
            <li>Luis Colomba</li>
            <li>Bryan Torres</li>
            <li>Carlos Torres</li>
            <li>Gabriela Cardona</li>
            </Container>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Container>
      <br /> <br />
      <Container>
        <h2 className="secHeader">Links</h2>
        <div className="homeInfo">
        <b>Github</b> <br />
        <a href={"https://github.com/Colomba03/chemcamapp.github.io"}>https://github.com/Colomba03/chemcamapp.github.io</a>
        <br /> <br />
        <b>Trello</b> <br />
        <a href={"https://trello.com/b/eo9RFLjW/team-6-chemcam"}>https://trello.com/b/eo9RFLjW/team-6-chemcam</a>
        </div> <br /> <br />
      </Container>
    </Container>
  );
}

export default Home;