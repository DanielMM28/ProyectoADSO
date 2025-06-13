import React from 'react';
import TablaUsuarios from '../components/DataTables/TablaUsuarios';
import Navbar from '../components/navbar';

function Clientes() {
  return (
    <>
    
   
    <div className="container mt-5">
      <h1 className="text-center">Lista de Clientes</h1>
      <p>
        Bienvenido a la sección de clientes. Aquí podrás encontrar toda la información relacionada con nuestros clientes.
        Próximamente agregaremos filtros, categorías, y opciones de búsqueda para facilitar tu experiencia.
      </p>
      <div className="card shadow-lg border-0">
        <div className="card-body">
          
          <TablaUsuarios></TablaUsuarios>
        </div>
      </div>
</div>
    </>
  );
}

export default Clientes;
