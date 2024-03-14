import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <Nav className="" variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/" className="navbar-custom">
         Home
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/puntosinteres"
          className="navbar-custom"
          eventKey="link-1"
        >
          Interest points
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/restaurant"
          className="navbar-custom"
          eventKey="link-2"
        >
          Our guides
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/hoteles"
          className="navbar-custom"
          eventKey="link-3"
        >
          Hotels
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/actividades"
          className="navbar-custom"
          eventKey="link-4"
        >
          Activities
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Layout;
