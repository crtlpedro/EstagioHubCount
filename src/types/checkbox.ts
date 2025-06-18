import { createContext, useContext } from 'react';

export interface ICheckboxContext {
  hideMnt: boolean;
  setHideMnt: (value: boolean) => void;
}

export const CheckboxContext = createContext<ICheckboxContext | undefined>(undefined);

export const useCheckbox = () => {
  const context = useContext(CheckboxContext);
  if (!context) throw new Error("useCheckbox deve ser usado dentro do Wrapper");
  return context;
};
