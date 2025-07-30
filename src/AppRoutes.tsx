import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@pages/Login";
import Home from "@pages/Home";
import PrivateRoute from "./PrivateRoute";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* pública */}
      <Route index element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      {/* protegidas */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;