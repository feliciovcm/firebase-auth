import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export function ProtectedRoute(props) {
  const { children, redirectPath } = props;

  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return (
      <Navigate to={redirectPath} replace />
    );
  }

  return (
    children || <Outlet />
  );
}
