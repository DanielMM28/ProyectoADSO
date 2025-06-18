import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Kardexfun = () => {
  const datosIniciales = [
    { id: 1, producto: 'Mouse Logitech', fecha: '2025-06-15', tipo: 'Salida', cantidad: 15, stock: 30 },
    { id: 2, producto: 'Teclado Redragon', fecha: '2025-06-16', tipo: 'Salida', cantidad: 5, stock: 25 },
    { id: 3, producto: 'Monitor LG', fecha: '2025-06-16', tipo: 'Salida', cantidad: 10, stock: 20 },
    { id: 4, producto: 'Cable HDMI', fecha: '2025-06-17', tipo: 'Entrada', cantidad: 2, stock: 18 },
    { id: 5, producto: 'Disco SSD 480GB', fecha: '2025-06-17', tipo: 'Salida', cantidad: 8, stock: 26 },
    { id: 6, producto: 'Memoria RAM 8GB', fecha: '2025-06-18', tipo: 'Entrada', cantidad: 4, stock: 22 },
    { id: 7, producto: 'Mouse Logitech', fecha: '2025-06-18', tipo: 'Salida', cantidad: 5, stock: 17 },
  ];

  const [datos, setDatos] = useState(datosIniciales);
  const [datosOriginales] = useState(datosIniciales);

  const columnas = [
    { name: 'ID', selector: row => row.id, sortable: true, width: '60px' },
    { name: 'Producto', selector: row => row.producto, sortable: true },
    { name: 'Fecha', selector: row => row.fecha, sortable: true },
    {
      name: 'Tipo',
      selector: row => row.tipo,
      cell: row => (
        <span className={`badge ${row.tipo === 'Entrada' ? 'bg-success' : 'bg-danger'}`}>
          {row.tipo}
        </span>
      ),
      sortable: true
    },
    { name: 'Cantidad', selector: row => row.cantidad },
    { name: 'Stock', selector: row => row.stock },
    
  ];

  const handleBuscar = (e) => {
    const valor = e.target.value.toLowerCase();
    const filtrados = datosOriginales.filter(item =>
      item.producto.toLowerCase().includes(valor)
    );
    setDatos(filtrados);
  };

  return (
    <div className="container mt-4">
     
      <input
        type="text"
        className="form-control w-50 mb-3"
        placeholder="Buscar ..."
        onChange={handleBuscar}
      />

      <DataTable
        columns={columnas}
        data={datos}
        pagination
        highlightOnHover
        responsive
        striped
      />
    </div>
  );
};

export default Kardexfun;

