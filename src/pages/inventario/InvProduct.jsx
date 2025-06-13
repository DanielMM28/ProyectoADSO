import React from 'react';
import TablaProductos from '../../components/DataTables/TablaProductos';

const ListProductos = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Lista de productos </h1>
      <p>
        Bienvenido a la sección de inicio. Aquí podrás encontrar toda la variedad de artículos disponibles en nuestra tienda virt
        Próximamente agregaremos filtros, categorías, y opciones de búsqueda para facilitar tu experiencia.
      </p>
      <TablaProductos></TablaProductos>
    </div>
  );
};

export default ListProductos;