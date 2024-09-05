import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const ProtectedView = () => {
  const { signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    signout();
    navigate("/");
  };

  return (
    <div>
      ProtectedView
      <button onClick={handleClick}>Logout</button>
      <br />
      <Link to="/protected1">1</Link>
      <br />
      <Link to="/protected2">2</Link>
      <br />
      <Link to="/protected3">3</Link>
    </div>
  );
};

export default ProtectedView;
