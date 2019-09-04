import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class ExperienceCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={this.props.job.picture} />
          <Card.Body>
            <Card.Title>{this.props.job.company}</Card.Title>
            <Card.Text>{this.props.job.time}</Card.Text>
            <Card.Text>{this.props.job.role}</Card.Text>
            <Card.Text>{this.props.job.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
