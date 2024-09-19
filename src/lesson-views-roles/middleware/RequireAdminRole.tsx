import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

export function RequireAdminRole() {
  const { user } = useContext(AuthContext);

  if (user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
