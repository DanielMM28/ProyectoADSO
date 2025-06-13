// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const storedRol = localStorage.getItem('rol');
    if (storedRol) {
      setUsuario({ rol: storedRol });
    }
  }, []);

  const login = (rol) => {
    localStorage.setItem('rol', rol);
    setUsuario({ rol });
  };

  const logout = () => {
    localStorage.removeItem('rol');
    localStorage.removeItem('token');
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};