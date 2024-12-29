import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { User } from "../types/User";

export interface AuthContextProps {
  users: User[]; // Replace `any` with your user type
  setActiveUserr: Dispatch<SetStateAction<User>>;
  activeUser: User;
  // login: (userData: any) => void; // Replace `any` with your user type
  // logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  users: [
    { firstName: "John", lastName: "Smith", weight: 150, date: new Date() },
    { firstName: "Jane", lastName: "Smith", weight: 120, date: new Date() },
  ],
  setActiveUserr: function () {
    console.log("setActiveUser function");
  },
  activeUser: { firstName: "J", lastName: "L", weight: 119, date: new Date() },
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([
    { firstName: "Allen", lastName: "Smith", weight: 150, date: new Date() },
    { firstName: "Jenny", lastName: "Smith", weight: 120, date: new Date() },
  ]);

  const [activeUser, setActiveUser] = useState<User>(users[0]);

  return (
    <AuthContext.Provider
      value={{ users, setActiveUserr: setActiveUser, activeUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
