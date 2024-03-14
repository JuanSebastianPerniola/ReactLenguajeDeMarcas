import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Layout from "./Layout";
import RazaDetalles from "./RazaDetalles";
import Raza from "./Raza";
import Inicio from "./Inicio";
function App() {
  return (
    <BrowserRouter>
     
      {/* Encabezado*/}
      <Nav fill variant="tabs" className="bg-body-tertiary">
        <Nav.Item>
          <Layout />
        </Nav.Item>
      </Nav>

      <Container>
        <Routes>
          {/* Aquí falta la ruta para la página de inicio */}
          <Route index element={<Inicio />} />
          {/* <Route index element={<Inicio />} /> */}

          {/* Ruta para la página de razas */}
          <Route path="Raza" element={<Raza />} />

          {/* Ruta para los detalles de la raza */}
          <Route path="Raza/id" element={<RazaDetalles id={""} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
