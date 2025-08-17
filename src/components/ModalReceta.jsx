import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ListaRecetas from "./ListaRecetas";

const ModalReceta = ({ mostrar, handleClose, abrirModal }) => {
  const recetasLocalstorage =
    JSON.parse(localStorage.getItem("listaRecetas")) || [];

  const [recetas, setRecetas] = useState(recetasLocalstorage);

  const [edicion, setEdicion] = useState(false);
  const [indiceEditar, setIndiceEditar] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const agregarRecetas = (data) => {
    if (edicion) {
      const nuevas = [...recetas];
      nuevas[indiceEditar] = data;
      setRecetas(nuevas);
      setEdicion(false);
      setIndiceEditar(null);
    } else {
      setRecetas([...recetas, data]);
    }
    reset();
    handleClose();
  };

  const borrarRecetas = (receta) => {
    const recetasFiltradas = recetas.filter((item) => item !== receta);
    //actualizar el estado recetas
    setRecetas(recetasFiltradas);
  };

  const editarRecetas = (indice) => {
    reset(recetas[indice]);
    setEdicion(true);
    setIndiceEditar(indice);
    abrirModal();
  };

  useEffect(() => {
    localStorage.setItem("listaRecetas", JSON.stringify(recetas));
  }, [recetas]);

  useEffect(() => {
    if (mostrar) {
      if (!edicion) {
        reset({
          nombre: "",
          categoria: "",
          imagen: "",
          descripcion: "",
        });
        setIndiceEditar(null);
      }
    } else {
      reset({
        nombre: "",
        categoria: "",
        imagen: "",
        descripcion: "",
      });
      setEdicion(false);
      setIndiceEditar(null);
    }
  }, [mostrar, edicion, reset]);
  return (
    <>
      <Modal show={mostrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {edicion ? "Editar Receta" : "Agregar Receta"}
          </Modal.Title>
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
      <ListaRecetas
        recetas={recetas}
        borrarRecetas={borrarRecetas}
        editarRecetas={editarRecetas}
        admin={true}
      ></ListaRecetas>
    </>
  );
};

export default ModalReceta;
