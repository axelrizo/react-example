import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    signin();
    navigate("/protected");
  };

  return (
    <div>
      LoginView
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginView;
