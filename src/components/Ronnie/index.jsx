import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./ronnie.css";
import Title from "./title";
import ExperienceCard from "../ExperienceCard";
var jobs = require("./jobs");

class Ronnie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title />
        <section id="experience">
          <h1>Experience</h1>
          <Row>
            {jobs.map(job => {
              return (
                <Col lg={4} key={job.id}>
                  <ExperienceCard job={job} key={job.id} />
                </Col>
              );
            })}
          </Row>
        </section>
      </div>
    );
  }
}

export default Ronnie;
