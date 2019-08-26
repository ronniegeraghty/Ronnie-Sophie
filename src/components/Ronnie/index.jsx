import React, { Component } from "react";
import {
  Button,
  Col,
  Image,
  Jumbotron,
  Row,
  Form,
  Card,
  Toast
} from "react-bootstrap";
import styles from "./ronnie.module.css";
import profilePic from "./ronnieProfile.png";

class Ronnie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      name: ""
    };
    this.toggleToast = this.toggleToast.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }
  toggleToast() {
    this.setState({ showToast: !this.state.showToast });
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }
  submitButton(e) {
    e.preventDefault();
    this.toggleToast();
  }

  render() {
    return (
      <div className={styles.page}>
        <Jumbotron>
          <Row>
            <Col lg={2} md={2} sm={12}>
              <Image src={profilePic} roundedCircle fluid></Image>
            </Col>
            <Col lg={4} md={4} sm={12}>
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
        <Row className="mr-auto">
          <Col lg={4} md={6} sm={12}>
            <Card className={styles.card}>
              <Card.Body>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange}
                      placeholder="Name"
                    />
                    <Form.Text className="text-muted">
                      Click "Submit" below when your done.
                    </Form.Text>
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.submitButton}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Toast show={this.state.showToast} onClose={this.toggleToast}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Hello!</strong>
                <small>11 min ago</small>
              </Toast.Header>
              <Toast.Body>
                {" "}
                Hello {this.state.name}! Welcome to my page.{" "}
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Ronnie;
