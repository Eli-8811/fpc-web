import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@pages/Login";
import Home from "@pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* pública */}
      <Route index element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      {/* protegidas */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;