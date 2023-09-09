/* eslint-disable react/prop-types */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRouter = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (user.email) {
    return children;
  }

  return <Navigate to="/sign-in" state={{ from: location }} />;
};

export default PrivateRouter;
