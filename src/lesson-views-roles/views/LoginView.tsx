import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginUser = () => {
    signin("user");
    navigate("/");
  };

  const handleLoginAdmin = () => {
    signin("admin");
    navigate("/");
  };

  return (
    <div>
      LoginView <br />
      <button onClick={handleLoginUser}>Login as user</button> <br />
      <button onClick={handleLoginAdmin}>Login as admin</button>
    </div>
  );
};

export default LoginView;
