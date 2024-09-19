import { Outlet } from "react-router-dom";

export const DashboardUserNavbar = () => {
  return (
    <>
      <nav
        style={{ display: "flex", gap: "16px", backgroundColor: "lightgray" }}
      >
        <span>USER</span>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/protected">Protected</a>
        <a href="/admin">Protected - Admin</a>
      </nav>
      <Outlet />
    </>
  );
};
