import React, { useState } from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import ModalReceta from "./ModalReceta";

const BlogRecetas = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <Container>
      <div className="d-flex justify-content-between mt-4">
        <h1>Lista de recetas</h1>
        <Button onClick={() => setMostrar(true)}>Agregar</Button>
      </div>
      <Row>
        <Col>
          <Card className="mt-2 d-flex flex-row">
            <Card className="img"></Card>
            <Card.Body className="text-start">
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Ver receta</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ModalReceta
        mostrar={mostrar}
        handleClose={() => setMostrar(false)}
      ></ModalReceta>
    </Container>
  );
};

export default BlogRecetas;
