import React from "react";
import { Container } from "@material-ui/core";
// import { Document, Page } from "react-pdf";

function About() {

  // const [numPages, setNumPages] = useState(null);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <Container className="mainFont" style={{textAlign:"justify"}}>
      <h2>Current Situation</h2>
      <p>
        As all graduates from UPRM know, chemistry is a required subject. Many of these UPRM
        students do not course majors surrounding chemistry, and have many difficulties or conflicts
        when studying for these required chemistry courses. Those that are within the field of
        chemistry are always searching for ways to make their studying and workflow more efficient.
        We are designing an application that can receive a basic chemistry problem or question,
        analyze it, solve it and provide some kind of explanation. We will design a lexer that can read
        the chemical formulas and symbols from a text input or image. We are still in the planning
        phase for the structure and look for our application.
      </p>
      <br />

      <h2>Needs & Ideas</h2>
      <p>
        There is a need for students, educators, and researchers to help them facilitate and solve their
        chemistry problems. This app is designed in a simple yet understandable way in order to improve
        the problem solving time of said users so they can gain a deeper understanding of the
        fundamental materials, concepts, and methods they will need in their future careers.
        In order to satisfy their needs, our team will design an application that lets the user photograph
        and scan chemistry problems using their phone camera. The app should be able to solve the
        chemistry problems and show the step-by-step process and solution to the problem.
      </p>
      <br />

      <h2>Concepts & Facilities</h2>
      <p>
        The user can choose the branch/level of chemistry they need help with. They can input images
        of problems or input the equations and symbols manually. The app has other tools and
        information that The app will include tools to get the user help solving and explaining their
        chemistry problems via a photo they take, a picture they already have or manually written
        problems.
      </p>
    </Container>

    // <Document
    //   file={aboutPDF}
    //   onLoadSuccess={onDocumentLoadSuccess}
    //   onLoadError={console.error}
    // >
    //   {Array.from(
    //     new Array(numPages),
    //     (el, index) => (
    //       <Page
    //         key={`page_${index + 1}`}
    //         pageNumber={index + 1}
    //       />
    //     ),
    //   )}
    // </Document>
  );
}

export default About;