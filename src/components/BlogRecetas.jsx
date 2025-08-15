import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ModalReceta from "./ModalReceta";

const BlogRecetas = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <Container>
      <div className="d-flex justify-content-between mt-4">
        <h1>Lista de recetas</h1>
        <Button onClick={() => setMostrar(true)}>Agregar</Button>
      </div>
      <ModalReceta
        mostrar={mostrar}
        handleClose={() => setMostrar(false)}
        abrirModal={() => setMostrar(true)}
      ></ModalReceta>
    </Container>
  );
};

export default BlogRecetas;
