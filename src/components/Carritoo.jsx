import React, { useState } from 'react';
import { useCarrito } from './carrito'; 
import Swal from 'sweetalert2';


const Carrito = () => {
  const [mostrarPanel, setMostrarPanel] = useState(false);
  const { carrito, eliminarDelCarrito, limpiarCarrito } = useCarrito();

  const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  

  return (
    <div>
      <button
        onClick={() => setMostrarPanel(true)}
        style={{  position: 'fixed', top: 130, right: 0, borderRadius: '40px' }}
        className="btn btn-secondary mt-auto"
      >
        🛒  {carrito.length > 0 ? `(${carrito.reduce((acc, item) => acc + item.cantidad, 0)})` : 'Carrito'}
      </button>

      <div
        style={{
          position: 'fixed',
          top: 0,
          right: mostrarPanel ? 0 : '-100%',
          width: '400px',
          height: '100%',
          backgroundColor: '#f8f9fa',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          padding: '20px',
          transition: 'right 0.3s ease-in-out',
          zIndex: 1050,
          overflowY: 'auto'
        }}
      >
        <button
          className="btn btn-danger btn-sm mb-3"
          onClick={() => setMostrarPanel(false)}
        >
          ✖ Cerrar
        </button>

        <h5 style={{textAlign:'center'}}>🛒 Tu Carrito</h5>

        {carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            {carrito.map((item) => (
              <div key={item.id} className="mb-3 border-bottom pb-2">
                <strong>{item.title}</strong><br />
                Precio: ${item.price}<br />
                Cantidad: {item.cantidad}<br />
                <button
                  className="btn btn-sm btn-outline-danger mt-1"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
 <h6>Impuestos : ${ (total * 0.19).toFixed(2) }</h6>
    <h5>Total: ${ total.toFixed(2) }</h5>
    <h5>Total con IVA: ${ (total * 1.19).toFixed(2) }</h5>
           
            <hr />
            <button
              className="btn btn-success mt-2"
              onClick={() => {
                Swal.fire({
                  title: 'Compra realizada',
                  text: `Total: $${(total * 1.19).toFixed(2)}`,
                  icon: 'success',
                  confirmButtonText: 'Aceptar',
                  position: 'center',
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                  }
                })
                limpiarCarrito();
              }}
            
                    >Comprar</button>

            <button
              className="btn btn-warning mt-2"
              onClick={limpiarCarrito}
            >
              Vaciar Carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;
