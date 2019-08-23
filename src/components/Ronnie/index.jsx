import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import styles from "./ronnie.module.css";

class Ronnie extends Component {
  render() {
    return (
      <div className={styles}>
        <Jumbotron>
          <h1>Ronnie's Page</h1>
          <p>Ronnie's page to be a dingus flingus.</p>
          <p>
            <a href="https://github.com/ronniegeraghty">
              <Button variant="primary">Ronnie's GitHub</Button>
            </a>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Ronnie;
