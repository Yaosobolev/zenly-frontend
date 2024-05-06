import React from "react";
import { Navigate } from "react-router-dom";

// Функция, которая проверяет, аутентифицирован ли пользователь

// Защищенный маршрут
const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
  const isAuthenticated = () => {
    return true;
  };

  if (isAuthenticated()) {
    return element;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
