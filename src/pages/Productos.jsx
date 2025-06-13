// src/pages/Productos.jsx
import React from 'react';
import Consumo from '../components/Card';
import './paginas.css';
import Navbar from '../components/navbar';
import Carrito from '../components/Carritoo';

const productos = () => {
  return (
  <>

    <div className="container mt-5">
      <div style={{ marginBottom: '20px', display : 'flex', borderRadius: '5px' }}>
      <h1 className="text-center">🛒 Página de ventas</h1>
      <Carrito></Carrito>
      </div>
      <hr />
      <br />
    <Consumo></Consumo>  
      </div>
  </>
  );
};

export default productos;
