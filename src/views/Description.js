import React from "react";
import { Container } from "@material-ui/core";

function Description() {
  return (
    <Container className="mainFont" style={{textAlign:"justify"}}>
      <h2>Narrative</h2>
      <p>
        Many students may have trouble solving chemistry problems. While students are the main
        group of these doubts it is not limited to only them, but can also benefit educators who may
        sometimes forget the steps required to solve these problems. The goal of this platform is to
        create an easy way to understand and solve chemistry problems. By scanning or entering the
        chemistry problem onto the app it will allow the user to see the step-by-step process of how the
        problem is solved.
      </p>
      <br />

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
      <br />

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
  );
}

export default Description;