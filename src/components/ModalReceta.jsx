import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ListaRecetas from "./ListaRecetas";

const ModalReceta = ({ mostrar, handleClose }) => {
  const recetasLocalstorage =
    JSON.parse(localStorage.getItem("listaRecetas")) || [];

  const [recetas, setRecetas] = useState(recetasLocalstorage);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const agregarRecetas = (data) => {
    //tomar la receta que esta en el state recetas y guardarlo en el state recetas (array)
    //recetas.push(color)
    setRecetas([...recetas, data]);
    //limpiar el formulario
    reset();
    handleClose();
  };

  useEffect(() => {
    localStorage.setItem("listaRecetas", JSON.stringify(recetas));
  }, [recetas]);

  return (
    <>
      <Modal show={mostrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Receta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(agregarRecetas)}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de la receta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Tarta de manzana"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 3,
                    message: "Debe tener al menos 3 caracteres",
                  },
                })}
              />
              {errors.nombre && (
                <Form.Text className="text-danger mx-2">
                  {errors.nombre.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Postre, Entrada, Plato principal"
                {...register("categoria", {
                  required: "La categoría es obligatoria",
                })}
              />
              {errors.categoria && (
                <Form.Text className="text-danger mx-2">
                  {errors.categoria.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://imagen-receta.jpg"
                {...register("imagen", {
                  validate: (value) =>
                    value === "" ||
                    value.startsWith("http://") ||
                    value.startsWith("https://")
                      ? true
                      : "Debe ser una URL válida que empiece con http o https",
                })}
              />
              {errors.imagen && (
                <Form.Text className="text-danger mx-2">
                  {errors.imagen.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Breve descripción de la receta"
                rows={3}
                {...register("descripcion", {
                  required: "La descripción es obligatoria",
                  minLength: {
                    value: 10,
                    message: "Debe tener al menos 10 caracteres",
                  },
                  maxLength: {
                    value: 200,
                    message: "No puede superar los 200 caracteres",
                  },
                })}
              />
              {errors.descripcion && (
                <Form.Text className="text-danger mx-2">
                  {errors.descripcion.message}
                </Form.Text>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <ListaRecetas recetas={recetas}></ListaRecetas>
    </>
  );
};

export default ModalReceta;
