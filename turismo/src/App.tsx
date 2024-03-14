import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Layout from "./Layout";

import Inicio from "./Inicio";


import Hoteles from "./hoteles";

import Actividades from "./actividades";

import Restaurante from "./restaurant";

import PuntosInteres from "./puntosinteres";

import "./App.css"; // Asi importo el css para ñadair un imagen en el fondo

export default function App() {
  return (
    <BrowserRouter>
      {/* Encabezado*/}

      <Nav fill variant="tabs" className="bg-body-tertiary">
        <Nav.Item>
          <Layout />
        </Nav.Item>
      </Nav>

      {/* Contenido */}
      <Container>
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="puntosinteres" element={<PuntosInteres />} />
          <Route path="restaurant" element={<Restaurante />} />
          <Route path="hoteles" element={<Hoteles />} />
          <Route path="actividades" element={<Actividades />} />
         
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
