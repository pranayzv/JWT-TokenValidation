import React from "react";
import { useAuth } from "./ComponentAuthProvider";
import { Navigate } from "react-router-dom";

function AuthRequest({ children }) {
  const auth = useAuth();
    
  if (auth.username) {
    return children;
  }

  return <Navigate to="/" />;
}

export default AuthRequest; 
