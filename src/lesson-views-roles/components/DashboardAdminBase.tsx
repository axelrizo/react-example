import React, { FC, useContext } from "react";
import { AuthContext, User } from "../contexts/AuthProvider";

interface Props {
  userRole: ({ user }: { user: User | null }) => React.ReactNode;
}

export const DashboardAdminBase: FC<Props> = ({ userRole }) => {
  const { user } = useContext(AuthContext);

  return (
    <nav style={{ display: "flex", gap: "16px", backgroundColor: "lightgray" }}>
      {userRole ? userRole({ user }) : <span>{user?.role}</span>}
      <a href="/">Dashboard</a>
      <a href="/login">Login</a>
      <a href="/protected">Protected</a>
      <a href="/admin">Protected - Admin</a>
      <a href="/admin">Nueva vista</a>
    </nav>
  );
};
