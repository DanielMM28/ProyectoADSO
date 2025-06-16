import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from 'sweetalert2';

import { useCarrito } from '../components/carrito'; 

function Consumo() {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error('Error al cargar productos:', err));
  }, []);

  return (
    <div className="row" style={{ display: 'flex' }}>
      {productos.map((producto) => (
        <div key={producto.id} className="col-12 col-sm-5 col-md-5 col-lg-3 mb-5">
          <div
            className="card h-100 text-center shadow-sm"
            style={{
              borderRadius: '10px',
              background: 'linear-gradient(to right,rgb(216, 216, 216),rgb(236, 231, 231),rgb(207, 207, 207))',
              color: 'white',
            }}
          >
            <img
              src={producto.image}
              alt={producto.title}
              className="card-img-top p-3"
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title" style={{ fontSize: '14px', color: 'black' }}>
                {producto.title}
              </h5>
              <p className="card-text" style={{ fontSize: '14px', color: 'black' }}>
                Precio: ${producto.price}
              </p>
              <button className="btn btn-secondary mt-auto">Ver más</button>
              <button
                className="btn btn-success mt-2"
                onClick={() => {
                  agregarAlCarrito(producto);
                  Swal.fire({
                    title: 'Agregado al carrito',
                    text: producto.title,
                    icon: 'success',
                    position: 'top-end',
                    timer: 1000,
                    toast: true,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer);
                      toast.addEventListener('mouseleave', Swal.resumeTimer);
                    },
                    showConfirmButton: false
                  });
                }}
              >
                🛒 Añadir
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Consumo;
