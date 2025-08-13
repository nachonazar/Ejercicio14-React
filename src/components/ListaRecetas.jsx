import React from 'react';
import ItemReceta from './ItemReceta';

const ListaRecetas = ({recetas}) => {
    return (
        <div className='mt-4'>
            {
                recetas.map((item, indice) => (
                    <ItemReceta key={indice} receta={item}></ItemReceta>
                ))}
        </div>
    );
};

export default ListaRecetas;