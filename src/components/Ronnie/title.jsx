import React, { Component } from "react";
import { Button, Col, Image, Jumbotron, Row } from "react-bootstrap";
import profilePic from "./ronnieProfile.png";

export default class Title extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row>
            <Col lg={2} md={2} sm={12}>
              <Image src={profilePic} roundedCircle fluid></Image>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <h1>Ronnie Geraghty</h1>
              <p>
                Developer & <br />
                IBM zDevOps Technical Specialist
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <a href="https://github.com/ronniegeraghty">
                  <Button variant="outline-dark">
                    <i className="fab fa-github"></i>
                    GitHub
                  </Button>
                </a>
              </p>
            </Col>
            <Col>
              <p>
                <a href="https://github.com/ronniegeraghty">
                  <Button variant="outline-primary">
                    <i className="fab fa-linkedin"></i>LinkedIn
                  </Button>
                </a>
              </p>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
