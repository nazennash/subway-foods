import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Signup } from "./Auth/Signup";
import { Login } from "./Auth/Login";

export const LoginSignup = ({ setShowLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div>
      {isSignup ? (
        <Signup setIsSignup={setIsSignup} setShowLogin={setShowLogin} />
      ) : (
        <Login setIsSignup={setIsSignup} setShowLogin={setShowLogin} />
      )}
    </div>
  );
};
