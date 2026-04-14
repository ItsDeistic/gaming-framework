import React, { createContext, useState } from 'react';

export const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('adminAuth') === 'true';
  });

  const login = (password) => {
    if (password === (import.meta.env.VITE_ADMIN_PASS || 'admin123')) {
      localStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}
