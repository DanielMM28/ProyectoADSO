import { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

 const useCarrito = () => useContext(CarritoContext);

 const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };
  const comprar = () => {
 
    
  };

  const limpiarCarrito = () => setCarrito([]);

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
export default CarritoProvider;
export { CarritoContext, useCarrito, CarritoProvider };