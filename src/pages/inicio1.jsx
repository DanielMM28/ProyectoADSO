import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './inicio.css';
import Navbar from '../components/navbar';

const Inicioo = () => {
  return (
    <>

      <div className="container py-5">
        <h1 className="text-center mb-4">Bienvenido a la Tienda Virtual</h1>
        <h4 className="mb-2">Hola, Nombres</h4>
        <p className="text-muted">Rol:      Visitante</p>
        <p className="text-muted"></p>
          </div>
    </>
  );
};

export default Inicioo;
