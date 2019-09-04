import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./ronnie.css";
import Title from "./title";
import ExperienceCard from "../ExperienceCard";
var jobs = require("../../data/jobs");

class Ronnie extends Component {
  render() {
    return (
      <div>
        <Title />
        <section id="experience">
          <h2>Experience</h2>
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
        <section id="projects">
          <h2>Projects</h2>
        </section>
      </div>
    );
  }
}

export default Ronnie;
