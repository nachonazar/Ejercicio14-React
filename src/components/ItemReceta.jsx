import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ItemReceta = ({receta}) => {
    return (
          <Card className="mt-2 d-flex flex-row">
            <Card.Img className="w-25" src={receta.imagen}></Card.Img>
            <Card.Body className="text-start">
              <Card.Title>{receta.nombre}</Card.Title>
              <Card.Text>{receta.descripcion}</Card.Text>
              <div className='d-flex justify-content-end'><Button variant="primary">Ver receta</Button></div>
            </Card.Body>
          </Card>
    );
};

export default ItemReceta;