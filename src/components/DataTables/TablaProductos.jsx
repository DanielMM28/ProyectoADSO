import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const TablaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  const exportarExcel = () => {
    const ws = XLSX.utils.json_to_sheet(productos);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Productos');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const archivo = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(archivo, 'productos.xlsx');
  };

  const columnas = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
      width: '50px',
    },
    {
      name: 'Nombre',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Precio',
      selector: row => `$${row.price}`,
      sortable: true,
    },
    {
      name: 'Categoría',
      selector: row => row.category,
    },
    
    {
    name: 'Acciones',
    cell: (row) => (
      <div className="dropdown">
        <button
          className="btn btn-sm btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ⋮
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" onClick={() => verProducto(row)}>
              <FaEye className="me-2" /> Ver
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => editarProducto(row)}>
              <FaEdit className="me-2" /> Editar
            </button>
          </li>
          <li>
            <button className="dropdown-item text-danger" onClick={() => eliminarProducto(row)}>
              <FaTrash className="me-2" /> Eliminar
            </button>
          </li>
        </ul>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },

  ];

  const datosFiltrados = productos.filter(p =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <button className="btn btn-success ms-2" onClick={exportarExcel}>
          Exportar Excel
        </button>
      </div>

      <DataTable
        columns={columnas}
        data={datosFiltrados}
        pagination
        highlightOnHover
        striped
        responsive
        noDataComponent="No se encontraron productos"
      />
    </div>
  );
};
const verProducto = (producto) => {
  console.log("Ver producto:", producto);
    alert(`Detalles del producto:\n\nID: ${producto.id}\nNombre: ${producto.title}\nPrecio: $${producto.price}\nCategoría: ${producto.category}`);
};

const editarProducto = (producto) => {
  console.log("Editar producto:", producto);
};

const eliminarProducto = (producto) => {
  if (confirm(`¿Seguro que deseas eliminar el producto "${producto.nombre}"?`)) {

  }
};

export default TablaProductos;
