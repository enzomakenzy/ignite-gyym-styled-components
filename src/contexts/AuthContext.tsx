import { createContext, ReactNode, useState } from "react";
import { UserDTO } from "src/dtos/UserDTO";
import { api } from "src/services/api";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", { email, password });
  
      if (data.user) {
        setUser(data.user)
      } else {
        console.log("AAAAAAAA")
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      { children }
    </AuthContext.Provider>
  )
}