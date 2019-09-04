import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ibmPic from "../../images/ibmLogo.png";
import ejPic from "../../images/ejLogo.png";

export default class ExperienceCard extends Component {
  constructor(props) {
    super(props);
    this.setPicture = this.setPicture.bind(this);
  }

  setPicture() {
    if (this.props.job.company === "IBM") {
      return ibmPic;
    }
    if (this.props.job.company === "E-J Electric Installation Co.") {
      return ejPic;
    }
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={this.setPicture()} />
          <Card.Body>
            <Card.Title>{this.props.job.company}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.job.time}
            </Card.Subtitle>
            <Card.Text>{this.props.job.role}</Card.Text>
            <Card.Text>{this.props.job.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
