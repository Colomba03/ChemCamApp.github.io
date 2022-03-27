import React from "react";
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

function Risks() {

  const tableData = [
    { riskNum: 1, 
      description: "API Documentation for the created functions.",
      probability: 0.7,
      impact: "medium",
      exposure: 4,
      prevention: "Do research about the possible libraries or frameworks the team will use before starting to code.",
      mitigation: "Create a card in the initial sprint for members to research and decide which frameworks will be used for the project." },
    { riskNum: 2, 
      description: "Implementation for accessing the camera or pictures folder for the user to submit.",
      probability: 0.3,
      impact: "high",
      exposure: 1,
      prevention: "Start research about the necessary functionalities.",
      mitigation: "Create a card in the initial sprint for members to learn and start coding for the team to review." },
    { riskNum: 3, 
      description: "Select, understand and familiarize between the Python Django or Flask frameworks.",
      probability: 0.2,
      impact: "low",
      exposure: 2,
      prevention: "Do research about the frameworks and find their pros and cons before starting to code.",
      mitigation: "Separate time to learn and understand the frameworks for the team to discuss which one to use." },
    { riskNum: 4, 
      description: "Implementation of Optical Character Recognition (OCR) for the system to recognize the letters,\
      numbers and symbols the user writes.",
      probability: 0.8,
      impact: "high",
      exposure: 1,
      prevention: "Begin research about OCR to understand what it's\
      capable of doing with tutorials and examples.",
      mitigation: "Create a specific sprint regarding the OCR where members will use the time to learn about it\
      and begin the coding process." },
      { riskNum: 5, 
        description: "Implementation of calculating and displaying the step-by-step solution to a problem.",
        probability: 0.5,
        impact: "medium",
        exposure: 3,
        prevention: "Do research about chemistry problems and conduct interviews with chemical engineers to understand\
        what functions are needed to understand and achieve the implementation.",
        mitigation: "Create a specific sprint regarding the necessary functionalities for the system to resolve a problem\
        and show its process. During the sprint, members will do code reviews to see if the system is\
        completing the problems successfully." }];

  return (
    <Container className="mainFont">
      <h2>Risks</h2>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Risks</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Probability (0-1)</TableCell>
              <TableCell align="center">Impact</TableCell>
              <TableCell align="center">Exposure (0-5)</TableCell>
              <TableCell align="center">Prevention Strategy</TableCell>
              <TableCell align="center">Mitigation Plan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.riskNum}>
                <TableCell component="th" scope="row" align="center">{row.riskNum}</TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">{row.probability}</TableCell>
                <TableCell align="center">{row.impact}</TableCell>
                <TableCell align="center">{row.exposure}</TableCell>
                <TableCell align="center">{row.prevention}</TableCell>
                <TableCell align="center">{row.mitigation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br /> <br />
    </Container>
  );
}

export default Risks;