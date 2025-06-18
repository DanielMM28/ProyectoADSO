import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error('Error al cargar usuarios', err));
  }, []);

  const columnas = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
      width: "60px"
    },
   
    {
      name: 'Nombre',
      selector: row => `${row.name.firstname} ${row.name.lastname}`,
      sortable: true
    },
    {
      name: 'Correo',
      selector: row => row.email
    },
    {
      name: 'Usuario',
      selector: row => row.username
    },
     {
  name: 'Ciudad',
  selector: row => row.address.city,
  sortable: true
},
    {
      name: 'Acciones',
      cell: (row) => (
        <div className="dropdown">
          <button
            className="btn btn-sm btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
          
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" onClick={() => verUsuario(row)}>
                <FaEye className="me-2" /> Ver
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => editarUsuario(row)}>
                <FaEdit className="me-2" /> Editar
              </button>
            </li>
            <li>
              <button className="dropdown-item text-danger" onClick={() => eliminarUsuario(row)}>
                <FaTrash className="me-2" /> Eliminar
              </button>
            </li>
          </ul>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ];

  const verUsuario = (usuario) => {
    alert(`Ver usuario:\n${usuario.name.firstname} ${usuario.name.lastname}`);
  };

  const editarUsuario = (usuario) => {
    alert(`Editar usuario:\n${usuario.username}`);
  };

  const eliminarUsuario = (usuario) => {
    if (confirm(`¿Seguro que deseas eliminar a ${usuario.username}?`)) {
      alert("Usuario eliminado (simulado)");
    }
  };

  return (
    <div className="container mt-4">
      
      <DataTable
        columns={columnas}
        data={usuarios}
        pagination
        highlightOnHover
        responsive
      />
    </div>
   
  );
};

export default TablaUsuarios;
