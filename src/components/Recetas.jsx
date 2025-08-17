import React from "react";
import ListaRecetas from "./ListaRecetas";
import { useEffect, useState } from "react";
 import { Container } from "react-bootstrap";


const Recetas = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const recetasLocalstorage =
      JSON.parse(localStorage.getItem("listaRecetas")) || [];
    setRecetas(recetasLocalstorage);
  }, []);

  return (
    <Container>
        <h1 className="mt-4">Lista de recetas</h1>
        <ListaRecetas recetas={recetas} admin={false} />
    </Container>
  );
};

export default Recetas;
