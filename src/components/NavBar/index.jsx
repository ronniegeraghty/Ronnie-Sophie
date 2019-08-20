import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
/* import styles from "./navbar.module.css";
import NavLink from "react-bootstrap/NavLink"; */

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="/Home"> R&S</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav />
          <Nav className="ml-auto">
            <Link className="nav-item nav-link" to="Home">
              Home
            </Link>
            <Link className="nav-item nav-link" to="Ronnie">
              Ronnie
            </Link>
            <Link className="nav-item nav-link" to="Sophie">
              Sophie
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
