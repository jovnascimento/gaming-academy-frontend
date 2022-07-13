import React, { createContext } from "react";
import { User } from "../../../domain/models/User";

interface IAppContext {
  token: string | null;
  user: User | null;

  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
}

const AppContext = createContext({} as IAppContext);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token") ?? null
  );
  const [user, setUser] = React.useState<User | null>(
    JSON.parse(localStorage.getItem("user") ?? "null")
  );

  const context: IAppContext = {
    token,
    user,
    setToken,
    setUser,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};
