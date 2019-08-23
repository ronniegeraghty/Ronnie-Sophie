import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import styles from "./sophie.module.css";

class Sophie extends Component {
  render() {
    return (
      <div className={styles}>
        <Jumbotron>
          <h1>Sophie's Page</h1>
          <p>Sophie's page to be a dingus.</p>
          <p>
            <a href="https://github.com/SophieGCollin">
              <Button variant="primary">Sophie's GitHub</Button>
            </a>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Sophie;
