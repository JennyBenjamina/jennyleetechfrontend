import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { User } from "../types/User";
import axiosInstance from "api/axiosInstance";

export interface AuthContextProps {
  users: User[];
  setActiveUserr: Dispatch<SetStateAction<User>>;
  activeUser: User;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  useEffect(() => {
    console.log("Auth Provider");
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/user");
        console.log(response, "all users");
        setUsers(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const [users, setUsers] = useState<User[]>([
    {
      firstName: "Allen",
      lastName: "Smith",
      weight: 150,
      date: new Date(),
      userId: "1",
    },
    {
      firstName: "Jenny",
      lastName: "Smith",
      weight: 120,
      date: new Date(),
      userId: "2",
    },
  ]);

  const [activeUser, setActiveUser] = useState<User>(users[1]);

  return (
    <AuthContext.Provider
      value={{ users, setActiveUserr: setActiveUser, activeUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
