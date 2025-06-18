import { createContext, useContext, useState } from "react";
import type {
  ICheckboxContext,
  IUserContext,
  IProviderProps,
  IModuleContext,
  iFavoriteContext,
} from "../types/Wrapper";
import { userLogic } from "../types/user";
import type { Module } from "../types/module";
import { modules } from "../utils/modules";

export const CheckboxContext = createContext<ICheckboxContext | undefined>(
  undefined
);
export const UserContext = createContext<IUserContext | undefined>(undefined);
export const ModuleContext = createContext<IModuleContext | undefined>(
  undefined
);
export const FavoriteContext = createContext<iFavoriteContext | undefined>(
  undefined
);

export const useCheckbox = () => {
  const context = useContext(CheckboxContext);
  if (!context) throw new Error("useCheckbox deve ser usado dentro do Wrapper");
  return context;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser deve ser usado dentro do Wrapper");
  return context;
};

export const useModules = () => {
  const context = useContext(ModuleContext);
  if (!context) throw new Error("useModule deve ser usado dentro do Wrapper");
  return context;
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context)
    throw new Error("useFavorites deve ser usado dentro do Wrapper");
  return context;
};

export const Wrapper = ({ children }: IProviderProps) => {
  const { name, setName } = userLogic();
  const [hideMnt, setHideMnt] = useState(false);
  const [moduleList, setModuleList] = useState<Module[]>(modules);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <CheckboxContext.Provider value={{ hideMnt, setHideMnt }}>
      <UserContext.Provider value={{ name, setName }}>
        <ModuleContext.Provider value={{ moduleList, setModuleList }}>
          <FavoriteContext.Provider value={{ favorites, setFavorites, toggleFavorite}}>
          {children}
          </FavoriteContext.Provider>
        </ModuleContext.Provider>
      </UserContext.Provider>
    </CheckboxContext.Provider>
  );
};
