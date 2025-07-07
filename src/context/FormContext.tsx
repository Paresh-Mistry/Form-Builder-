// src/context/FormContext.tsx
import React, { createContext, useContext, useState } from "react";

interface FormContextType {
  handleSave?: () => void;
  setHandleSave?: (fn: () => void) => void;
  setHandleExport?: (fn: () => void) => void;
  handleExport?: () => void
}

const FormContext = createContext<FormContextType>({});

export const useFormContext = () => useContext(FormContext);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [handleSave, setHandleSave] = useState<() => void>(() => () => {});
  const [handleExport, setHandleExport] = useState<() => void>(() => () => {});

  return (
    <FormContext.Provider value={{ handleSave, setHandleSave, handleExport, setHandleExport}}>
      {children}
    </FormContext.Provider>
  );
};
