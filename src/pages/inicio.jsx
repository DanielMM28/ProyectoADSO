import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './inicio.css';
import Navbar from '../components/navbar';

const Inicio = () => {
  return (
    <>

      <div className="container py-5">
        <h1 className="text-center mb-4">Bienvenido a la Tienda Virtual</h1>
        <h4 className="mb-2">Hola, Nombres</h4>
        <p className="text-muted">Rol: Administrador del sistema</p>
        <p className="text-muted">Resumen del 01-06-2025 al 01-07-2025</p>

        <div className="row g-4 mt-4" id="totales">
          <div className="col-md-3">
            <div className="card card-total text-center">
              <div className="card-body">
                <h5 className="card-title">Total Productos</h5>
                <div className="card-value text-primary">60</div>
                <small className="text-muted">Registrados</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-total text-center">
              <div className="card-body">
                <h5 className="card-title">Total Clientes</h5>
                <div className="card-value text-warning">164</div>
                <small className="text-muted">Registrados</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-total text-center">
              <div className="card-body">
                <h5 className="card-title">Total Ventas</h5>
                <div className="card-value text-success">COP 11.567,462</div>
                <small className="text-muted">Realizadas</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-total text-center">
              <div className="card-body">
                <h5 className="card-title">Total Ventas</h5>
                <div className="card-value text-danger">COP 5.338,243</div>
                <small className="text-muted">Anuladas</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
