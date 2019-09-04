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
export default class Toaster extends Component {
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
  }
  submitButton(e) {
    e.preventDefault();
    this.toggleToast();
  }

  render() {
    return (
      <div>
        <Row className="mr-auto">
          <Col lg={4} md={6} sm={12}>
            <Card>
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
