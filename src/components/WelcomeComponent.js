import React from "react";
import { useAuth } from "./ComponentAuthProvider";
import  i  from "../images/icons8-employee-64.png";

function WelcomeComponent(props) {
  const auth = useAuth();
  const username = auth.username;
  const eid = auth.eid;
  return (
    <div className="container">
      <img src={i} height="250px" width="250px" />
      <h2>Hello {username}</h2>
      <h5>your eid number is: {eid}</h5>
    </div>
  );
}

export default WelcomeComponent;
