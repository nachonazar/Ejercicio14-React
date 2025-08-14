import React from 'react';
import ItemReceta from './ItemReceta';

const ListaRecetas = ({recetas, borrarRecetas}) => {
    return (
        <div className='mt-4'>
            {
                recetas.map((item, indice) => (
                    <ItemReceta key={indice} receta={item} borrarRecetas={borrarRecetas}></ItemReceta>
                ))}
        </div>
    );
};

export default ListaRecetas;