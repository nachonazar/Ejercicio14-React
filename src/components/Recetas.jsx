import React from "react";
import ListaRecetas from "./ListaRecetas";
import { useEffect, useState } from "react";
 import { Container } from "react-bootstrap";
import { leerRecetas } from "../helpers/queries.js";


const Recetas = () => {
  const [recetas, setRecetas] = useState([]);
  const [listaRecetas, setListaRecetas] = useState([]);

  useEffect(() => {
    obtenerRecetas()
  }, [])

  const obtenerRecetas = async () => {
    const respuesta = await leerRecetas()
    if(respuesta.status === 200){
      const datos = await respuesta.json();
      setListaRecetas(datos)
    }else{
      console.info("Ocurrio un error al buscar las recetas")
    }
  }

  useEffect(() => {
    const recetasLocalstorage =
      JSON.parse(localStorage.getItem("listaRecetas")) || [];
    setRecetas(recetasLocalstorage);
  }, []);

  return (
    <Container>
        <h1 className="mt-4">Lista de recetas</h1>
        <ListaRecetas recetas={listaRecetas} admin={false} />
    </Container>
  );
};

export default Recetas;
