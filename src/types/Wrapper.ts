import type {Module} from "./module"

export interface ICheckboxContext {
  hideMnt: boolean;
  setHideMnt: (value: boolean) => void;
}

export interface IUserContext {
  name: string;
  setName: (value: string) => void;
}

export interface IProviderProps {
  children: React.ReactNode;
}

export interface IModuleContext {
  moduleList: Module[];
  setModuleList: (list: Module[]) =>void;
}

export interface iFavoriteContext {
  favorites: number[];
  setFavorites: (value: number[]) => void;
  toggleFavorite: (id: number) => void;
}