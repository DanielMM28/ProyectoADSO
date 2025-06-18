import React from 'react';
import KardexPagina from '../components/DataTables/kardex';
import Navbar from '../components/navbar';
import Kardexfun from '../components/DataTables/kardex';

function Kardex() {
  return (
    <>
    
   
    <div className="container mt-5">
        <h1 className="text-center">Kardex de Productos</h1>
        <p>
          Bienvenido al Kardex de productos. Aquí podrás ver el registro de movimientos de inventario, incluyendo entradas y salidas de productos.
          Utiliza la barra de búsqueda para filtrar por nombre de producto.
        </p>
        
      <div className="card shadow-lg border-0">
        <div className="card-body">
          
          <Kardexfun></Kardexfun>
        </div>
      </div>
</div>
    </>
  );
}

export default Kardex;
