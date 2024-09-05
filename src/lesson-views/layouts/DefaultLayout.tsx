import { Link, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected</Link>
          </li>
        </ul>
      </nav>
      ------------------
      <Outlet />
      ------------------
      <footer>FOOTER</footer>
    </>
  );
};

export default DefaultLayout;
