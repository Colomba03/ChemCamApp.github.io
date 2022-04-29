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
      completing the problems successfully." },
    { riskNum: 6, 
      description: "The solution provided is incorrect.",
      probability: 0.3,
      impact: "high",
      exposure: 1,
      prevention: "Have a chemistry professional test the edge cases of the lexer and solutions provided.",
      mitigation: "The solution will be flagged until a chemistry professional can revise it." },
    { riskNum: 7, 
      description: "The publishers copyrights the solution that was used.",
      probability: 0.1,
      impact: "medium",
      exposure: 1,
      prevention: "Give credit to the textbook publishers.",
      mitigation: "Included the sources used when displaying the solution to the user." }];

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
      <h2>Risks Scenarios</h2>
      <b>What if a user inputs a chemical equation they want balanced, and it returns an incorrect answer?</b>
      <div>
        The user may go back in their solutions history and report the answer as wrong. It will then be reviewed
        by one of our experts and then the system will be debugged to find where it went wrong.
      </div>
      <br />
      <b>What if a user inputs a question and the lexer cannot recognize some of the numbers, letters or symbols?</b>
      <div>
        The user will be shown an error message with an explanation on what symbol they entered incorrectly,
        and which are the correct ones.
      </div>
      <br />
      <b>What if the user does not have a camera in his device or the camera function does not work?</b>
      <div>
        The user will be shown an error message that it can not recognize a camera. Then it will
        display another message that will advise the user to upload the image from its device library or
        write the problem in the input prompt provided.
      </div>
      <br />
      <b>What if the system takes too much time finding a solution to the problem?</b>
      <div>The user will be shown a pop-up screen with the message: “Looking for a solution.
        It may take a few minutes.” If the system can not find the solution it will display a message:
        “Sorry, the solution cannot be found.”</div>
        <br /><br />
    </Container>
  );
}

export default Risks;