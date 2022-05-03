import React from "react";
import { useAuth } from "./ComponentAuthProvider";
import i from "../images/icons8-employee-64.png";
import { useNavigate } from "react-router-dom";

function WelcomeComponent(props) {
  const navigate = useNavigate();
  const auth = useAuth();
  const username = auth.username;
  const eid = auth.eid;
  console.log("Welcome Component.");

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
        <button
          onClick={() => {
            localStorage.setItem("token", null);
            navigate("/", { replace: true });
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default WelcomeComponent;
