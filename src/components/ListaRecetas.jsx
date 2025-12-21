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
      {recetas.map((item) => (
        <ItemReceta
          key={item._id}
          receta={item}
          borrarRecetas={borrarRecetas}
          editarRecetas={editarRecetas}
          admin={admin}
        ></ItemReceta>
      ))}
    </div>
  );
};

export default ListaRecetas;
