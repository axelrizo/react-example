import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { DashboardAdminBase } from "./DashboardAdminBase";

export const DashboardNavbar = () => {
  const { user } = useContext(AuthContext);

  if (user?.role === "admin") {
    return (
      <DashboardAdminBase
        userRole={({ user }) => <h1>{user?.role} (Notificación)</h1>}
      />
    );
  } else {
    return (
      <DashboardAdminBase userRole={({ user }) => <span>{user?.role}</span>} />
    );
  }
};
