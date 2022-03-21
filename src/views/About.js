import { Container } from "@material-ui/core";
import React, { useState } from "react";
// import { Document, Page } from "react-pdf";

function About() {

  // const [numPages, setNumPages] = useState(null);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <Container className="mainFont" style={{textAlign:"justify"}}>
      <h2>Current Situation</h2>
      <p >
        As all graduates from UPRM know, chemistry is a required subject. Many of these UPRM
        students do not course majors surrounding chemistry, and have many difficulties or conflicts
        when studying for these required chemistry courses. Those that are within the field of
        chemistry are always searching for ways to make their studying and workflow more efficient.
        We are designing an application that can receive a basic chemistry problem or question,
        analyze it, solve it and provide some kind of explanation. We will design a lexer that can read
        the chemical formulas and symbols from a text input or image. We are still in the planning
        phase for the structure and look for our application.
      </p>

      <h2>Needs & Ideas</h2>
      <p>
        There is a need for students, educators, and researchers to help them facilitate and solve their
        chemistry problems.This app is designed in a simple yet understandable way in order to improve
        the problem solving time of said users so they can gain a deeper understanding of the
        fundamental materials, concepts, and methods they will need in their future careers.
        In order to satisfy their needs, our team will design an application that lets the user photograph
        and scan chemistry problems using their phone camera. The app should be able to solve the
        chemistry problems and show the step-by-step process and solution to the problem.
      </p>

      <h2>Concepts & Facilities</h2>
      <p>
        The user can choose the branch/level of chemistry they need help with. They can input images
        of problems or input the equations and symbols manually. The app has other tools and
        information that The app will include tools to get the user help solving and explaining their
        chemistry problems via a photo they take, a picture they already have or manually written
        problems.
      </p>

      <h2>Synopsis</h2>
      <p>
        Many students in today's day don't understand or have difficulties learning chemistry or have
        difficulties on how to solve chemistry problems whereas they don't understand the book and
        their examples very well or maybe they want to see some solutions to see more or less how the
        problems are solved and what formulas or ideas it takes to solve the problem in question. The
        majority of the professors in different schools prefer the students to have the chemistry books
        as their guide but maybe it's not enough and it's hard to understand. The idea for this
        application is to help the users solve different problems in many ways step by step so that the
        users have a better idea of how the problem is solved or have different ways of solving them
        and learning from it.
      </p>

      <h2>Assumptions & Dependencies</h2>
      <p>
        It is assumed that the user utilizing the app has a stable internet connection and a smartphone,
        tablet or computer so the application runs properly at the comfort of home, school or even at a
        workplace. The application is completely dependent on the internet connection. If such
        dependency is not provided then the application is useless.
      </p>

      <h2>Implicit & Derivative Goals</h2>
      <p>
        The main objective of our system is to perform in depth analysis and calculations of any
        chemical problem. We will achieve multiple other goals as we implement our system, and supply
        it with the required information. For example, before performing complex calculations the
        system must be able to identify the specific symbols and subscripts within chemical formulas.
        The system must contain all relevant information on each theorem and property and then apply
        this information. A goal derived from the original and implicit objective, is that we have to
        design a user interface that is easy to manipulate and understand, by people with some
        knowledge on chemistry.
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