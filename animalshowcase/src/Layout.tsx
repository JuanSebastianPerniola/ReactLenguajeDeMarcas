import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Layout() {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

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
          to="/Raza"
          className="navbar-custom"
          eventKey="link-1"
        >
          Raza 
        </Nav.Link>
      </Nav.Item>

      {/* <Nav.Item>
          <Link to={`/Raza/${selected}`}>Detalles de la raza {selected}</Link>
      </Nav.Item> */}
    </Nav>
  );
}

export default Layout;
