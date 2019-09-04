import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
/* import styles from "./navbar.module.css";
import NavLink from "react-bootstrap/NavLink"; */

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.toggleNavDrop = this.toggleNavDrop.bind(this);
  }
  toggleNavDrop() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <>
        <Navbar
          bg="light"
          expand="md"
          expanded={this.state.expanded}
          onToggle={this.toggleNavDrop}
        >
          <Navbar.Brand href="/Home">R&S</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link
                className="nav-item nav-link"
                to="Home"
                onClick={this.toggleNavDrop}
              >
                Home
              </Link>

              <Link
                className="nav-item nav-link"
                to="Ronnie"
                onClick={this.toggleNavDrop}
              >
                Ronnie
              </Link>

              <Link
                className="nav-item nav-link"
                to="Sophie"
                onClick={this.toggleNavDrop}
              >
                Sophie
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
