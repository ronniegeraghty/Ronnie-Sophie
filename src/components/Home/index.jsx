import React, { Component } from "react";
import { Jumbotron, Button, Card } from "react-bootstrap";
import styles from "./home.module.css";

class Home extends Component {
  render() {
    return (
      <div className={styles}>
        <Jumbotron>
          <h1>Welcome to R&S</h1>
          <p>
            This is were Ronnie and Sophie can work together on their coding and
            web development.
          </p>
          <p>
            <a href="https://github.com/ronniegeraghty/Ronnie-Sophie">
              <Button variant="primary">GitHub</Button>
            </a>
          </p>
        </Jumbotron>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Example Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Example Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;
