import React from "react";
import { useAuth } from "./ComponentAuthProvider";
import { Navigate } from "react-router-dom";

function AuthRequest({ children }) {
  const auth = useAuth();
  console.log("AuthRequest Component.");

  if (auth.username) {
    return children;
  }

  return <Navigate to="/" replace={true} />;
}

export default AuthRequest;
