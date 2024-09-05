import { createContext, ReactNode, useState } from "react";

interface AuthContextType {
  user: boolean;
  signin: () => void;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<boolean>(false);

  const signin = () => {
    setUser(true);
  };

  const signout = () => {
    setUser(false);
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
