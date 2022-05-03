import React from "react";
import { useAuth } from "./ComponentAuthProvider";
import i from "../images/icons8-employee-64.png";
import { useNavigate, Redirect } from "react-router-dom";

function WelcomeComponent(props) {
  const navigate = useNavigate();
  const redirect = useRedirect();
  const auth = useAuth();
  const username = auth.username;
  const eid = auth.eid;
  console.log("Welcome Component.");

  const logout = () => {
    localStorage.setItem("token", null);
    return <Redirect to="/" />;
  };

  return (
    <>
      <div className="container">
        <img
          src={i}
          height="250px"
          width="250px"
          alt={`employee:${username}`}
        />
        <h2>Hello {username}</h2>
        <h5>your eid number is: {eid}</h5>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
}

export default WelcomeComponent;
