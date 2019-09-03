import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export default class ExperienceCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: props.picture,
      company: props.company
    };
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={this.state.picture} />
          <Card.Body>
            <Card.Title>{this.state.company}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
