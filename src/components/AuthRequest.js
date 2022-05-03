import React from "react";
import { useAuth } from "./ComponentAuthProvider";
import { Redirect } from "react-router-dom";

function AuthRequest({ children }) {
  const auth = useAuth();
  console.log("AuthRequest Component.");

  if (auth.username) {
    return children;
  }

  return <Redirect to="/" />;
}

export default AuthRequest;
