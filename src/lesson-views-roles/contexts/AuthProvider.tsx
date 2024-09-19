import { createContext, ReactNode, useState } from "react";

type Role = "admin" | "user";

export interface User {
  role: Role;
}

interface AuthContextType {
  user: User | null;
  signin: (role: Role) => void;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const signin = (role: Role) => {
    setUser({ role });
  };

  const signout = () => {
    setUser(null);
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
