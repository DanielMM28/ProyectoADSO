import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Productos from './pages/Productos';
import Inicio from './pages/inicio';
import Login from './pages/login';
import ListProductos from './pages/inventario/InvProduct';
import Categorías from './pages/inventario/categorias';
import Marcas from './pages/inventario/marcas';
import Clientes from './pages/Clientes';
import Usuarios from './pages/Usuario';
import Historial from './pages/Historial';
import Contacto from './pages/Contacto';
import Perfil from './pages/perfil';
import Inicioo from './pages/inicio1';
import { CarritoProvider } from './components/carrito';
import { AuthProvider, AuthContext } from './autenticacion';
import { useContext } from 'react';

// ✅ Ruta protegida usando contexto
const RutaPrivada = ({ children }) => {
  const { usuario } = useContext(AuthContext);
  return usuario ? children : <Navigate to="/login" replace />;
};

function AppRoutes() {
  const { usuario } = useContext(AuthContext);

  return (
    <Router>
      {usuario && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/inicio" element={<RutaPrivada><Inicio /></RutaPrivada>} />
        <Route path="/inicio1" element={<RutaPrivada><Inicioo /></RutaPrivada>} />
        <Route path="/productos" element={<RutaPrivada><Productos /></RutaPrivada>} />
        <Route path="/InvProduct" element={<RutaPrivada><ListProductos /></RutaPrivada>} />
        <Route path="/Categorias" element={<RutaPrivada><Categorías /></RutaPrivada>} />
        <Route path="/Marcas" element={<RutaPrivada><Marcas /></RutaPrivada>} />
        <Route path="/Clientes" element={<RutaPrivada><Clientes /></RutaPrivada>} />
        <Route path="/Usuarios" element={<RutaPrivada><Usuarios /></RutaPrivada>} />
        <Route path="/Historial" element={<RutaPrivada><Historial /></RutaPrivada>} />
        <Route path="/Contacto" element={<RutaPrivada><Contacto /></RutaPrivada>} />
        <Route path="/perfil" element={<RutaPrivada><Perfil /></RutaPrivada>} />

        <Route
          path="*"
          element={<Navigate to={usuario ? "/inicio" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}

// ✅ Envuelve todo con los Providers necesarios
function Rutas() {
  return (
    <CarritoProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </CarritoProvider>
  );
}

export default Rutas;
