import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import * as bootstrap from 'bootstrap';

import logo from '../assets/logo.jpg';
import perfil from '../assets/perfil.png';

import './navbar.css';
import PerfilMenu from './verperfil';
import { AuthContext } from '../autenticacion';

const Navbar = () => {
  const { usuario } = useContext(AuthContext);
  const rol = usuario?.rol || null;

  // Cerrar el menú al hacer clic en un enlace en móviles
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarContent');

    navLinks.forEach((link) =>
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
          bsCollapse.hide();
        }
      })
    );
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-custom bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="perfil-img" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {rol === null && (
              <li className="nav-item">
                <Link className="nav-link" to="/inicio1">
                  <i className="bi bi-house-door me-2"></i>Inicio
                </Link>
              </li>
            )}

            {rol === 'visitante' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/inicio1">
                    <i className="bi bi-house-door me-2"></i>Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Productos">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contacto">
                    <i className="bi bi-envelope me-2"></i>Contacto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <i className="bi bi-box-arrow-in-right me-2"></i>Iniciar Sesión
                  </Link>
                </li>
              </>
            )}

            {rol === 'admin' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/inicio">
                    <i className="bi bi-house-door me-2"></i>Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Productos">
                    <i className="bi bi-box-seam me-2"></i>Productos
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    <i className="bi bi-box me-2"></i>Inventario
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/InvProduct">
                        <i className="bi bi-box-seam me-2"></i>Lista de Productos
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Categorias">
                        <i className="bi bi-tags me-2"></i>Lista de Categorías
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Marcas">
                        <i className="bi bi-bookmark-star me-2"></i>Lista de Marcas
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Clientes">
                    <i className="bi bi-people me-2"></i>Clientes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Usuarios">
                    <i className="bi bi-person-circle me-2"></i>Usuarios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/historial">
                    <i className="bi bi-clock-history me-2"></i>Historial
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contacto">
                    <i className="bi bi-envelope me-2"></i>Contacto
                  </Link>
                </li>
              </>
            )}

            {rol === 'comprador' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/inicio1">
                    <i className="bi bi-house-door me-2"></i>Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Productos">
                    <i className="bi bi-box-seam me-2"></i>Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contacto">
                    <i className="bi bi-envelope me-2"></i>Contacto
                  </Link>
                </li>
              </>
            )}
          </ul>

          <div className="d-flex align-items-center">
            <PerfilMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

