import React from "react";
import ItemReceta from "./ItemReceta";

const ListaRecetas = ({
  recetas,
  borrarRecetas,
  editarRecetas,
  admin = true,
}) => {
  return (
    <div className="mt-4">
      {recetas.map((item, indice) => (
        <ItemReceta
          key={indice}
          receta={item}
          borrarRecetas={borrarRecetas}
          editarRecetas={editarRecetas}
          indice={indice}
          admin={admin}
        ></ItemReceta>
      ))}
    </div>
  );
};

export default ListaRecetas;
