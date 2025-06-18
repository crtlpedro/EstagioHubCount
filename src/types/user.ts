import { createContext, useContext } from 'react';
import { useState } from 'react';


export interface IUserContext {
  name: string;
  setName: (value: string) => void;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser deve ser usado dentro do Wrapper");
  return context;
};

export const userLogic = (): IUserContext => {
  const [name, setName] = useState("");
  return { name, setName };
};
