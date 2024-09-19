import { Link } from "react-router-dom";

const TheNavbar = () => {
  return (
    <nav style={{ display: "flex", gap: "16px", backgroundColor: "lightgray" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/protected">Protected</Link>
      <Link to="/admin">Protected - Admin</Link>
    </nav>
  );
};

export default TheNavbar;
