"use client";

import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado del usuario

  // Función para iniciar sesión y guardar en localStorage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Guardar en localStorage
  };

  // Función para cerrar sesión y limpiar localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Eliminar del localStorage
  };

  // Cargar el usuario desde localStorage al montar el componente
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Establecer el usuario desde localStorage
    }
  }, []); // Solo se ejecuta una vez al montar

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto del usuario
export const useUserContext = () => useContext(UserContext);
