import React, { type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogin } from '@store/login/loginSelectors';

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const login = useSelector(selectLogin);
  const isAuthenticated = !!login;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
