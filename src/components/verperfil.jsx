import React, { useState, useRef, useEffect } from 'react';
import { Dropdown, Image } from 'react-bootstrap';
import perfilImg from '../assets/perfil.png';
import { usuariosFalsos } from '../data/usuariosfalsos';


const PerfilMenu = () => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  const usuario = {
    nombre: 'Iniciar Sesión',
      avatar: perfilImg,// reemplaza por una real
  };

  const toggleDropdown = () => setShow(!show);

  const cerrarSesion = () => {

    console.log('Sesión cerrada');
    window.location.href = '/login';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
const rol = localStorage.getItem('rol');
  return (
    <div ref={dropdownRef} className="position-relative d-inline-block">
      <button className="btn btn-light d-flex align-items-center gap-2" onClick={toggleDropdown}>
        <Image src={usuario.avatar} roundedCircle width={30} height={30} />
        <span className="d-none d-md-inline">{rol === 'admin' ? 'Administrador' : 'Usuario'}</span>
        <i className={`bi bi-chevron-${show ? 'up' : 'down'} ms-2`}></i>
        
      </button>

      {show && (
        <div className="dropdown-menu dropdown-menu-end show mt-2" style={{ minWidth: '200px' }}>
          <div className="px-3 py-2 text-muted small">{usuariosFalsos.email}</div>
          <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/perfil"><i className="bi bi-person-circle me-2"></i> Mi Perfil</a>
          <a className="dropdown-item"  >⚙ Configuración</a>
          
          <button className="dropdown-item text-danger" onClick={cerrarSesion}>Iniciar Sesion</button>
        </div>
      )}
    </div>
  );
};

export default PerfilMenu;
