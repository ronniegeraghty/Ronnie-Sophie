import React, { Component } from "react";
import {
  Button,
  Col,
  Image,
  Jumbotron,
  Row,
  Form,
  Card
} from "react-bootstrap";
import styles from "./ronnie.module.css";
import profilePic from "./ronnieProfile.png";

class Ronnie extends Component {
  render() {
    return (
      <div className={styles}>
        <Jumbotron>
          <Row>
            <Col lg={2}>
              <Image src={profilePic} roundedCircle fluid></Image>
            </Col>
            <Col>
              <h1>Ronnie's Page</h1>
              <p>Ronnie's page to be a dingus.</p>
              <p>
                <a href="https://github.com/ronniegeraghty">
                  <Button variant="dark">Ronnie's GitHub</Button>
                </a>
              </p>
            </Col>
          </Row>
        </Jumbotron>
        <Row>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" />
                    <Form.Text className="text-muted">
                      Click "Submit" below when your done.
                    </Form.Text>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Ronnie;
