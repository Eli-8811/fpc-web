import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { store } from "./store";

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const token = store.getState().login.accessToken;
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;