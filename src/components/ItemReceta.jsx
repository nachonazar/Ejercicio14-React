import React from "react";
import { Card, Button } from "react-bootstrap";

const ItemReceta = ({
  receta,
  borrarRecetas,
  editarRecetas,
  admin = true,
}) => {
  return (
    <Card className="mt-2 d-flex flex-row">
      <Card.Img className="w-25" src={receta.imagen}></Card.Img>
      <Card.Body className="text-start">
        <Card.Title>{receta.nombre}</Card.Title>
        <Card.Text>{receta.descripcion}</Card.Text>
        {admin && (
          <div className="d-flex justify-content-end gap-2">
            <Button variant="primary" onClick={() => editarRecetas(receta)}>
              Editar
            </Button>
            <Button variant="danger" onClick={() => borrarRecetas(receta)}>
              Borrar
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ItemReceta;
