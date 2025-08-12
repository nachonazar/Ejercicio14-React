import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalReceta = ({ mostrar, handleClose }) => {
  return (
    <Modal show={mostrar} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Receta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la receta</Form.Label>
            <Form.Control type="text" placeholder="Ej: Tarta de manzana" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Postre, Entrada, Plato principal"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tiempo de preparación</Form.Label>
            <Form.Control type="text" placeholder="Ej: 45 minutos" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagen (URL)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://imagen-receta.jpg"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción breve</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Breve descripción de la receta"
              rows={3}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalReceta;
