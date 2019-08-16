import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
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
      </div>
    );
  }
}

export default Home;
