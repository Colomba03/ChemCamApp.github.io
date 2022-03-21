import React from "react";
import { Container } from "@material-ui/core";

function ScopeSpan() {
  return (
    <Container className="mainFont" style={{textAlign:"justify"}}>
      <h2>Scope</h2>
      <p>
      The primary goal of the application is to help users solve their chemistry problems in a fast and
      easy way. When the user photographs or scans the problem, it will show the step-by-step process
      and solution.
      </p>
      <br />

      <h2>Span</h2>
      <b>Time Frame</b>
      <li>The project will be submitted on May 4, 2022</li>
      <li>Work will begin on March 8, 2022 and end on May 4, 2022</li>
      <br />

      <h2>Methodology</h2>
      <li>The project will be handled using Agile methodology. The team will use Trello to manage each sprint</li>
      <li>Meetings will be held weekly to report on progress and adjust the schedule if necessary</li>
    </Container>
  );
}

export default ScopeSpan;