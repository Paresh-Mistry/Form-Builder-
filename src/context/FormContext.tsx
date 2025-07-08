import React, { createContext, useContext, useState } from "react";
import type { Field } from "../types";

interface FormContextType {
  fields: Field[];
  setFields: React.Dispatch<React.SetStateAction<Field[]>>;
  handleChange: (index: number, updated: Field) => void;
  handleDelete: (index: number) => void;
  handleSave: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fields, setFields] = useState<Field[]>([]);

  const handleChange = (index: number, updated: Field) => {
    const newFields = [...fields];
    newFields[index] = updated;
    setFields(newFields);
  };

  const handleDelete = (index: number) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSave = () => {
    const cleaned = fields.map(({ id, label, type, helpText, required, options }) => ({
      id, label, type, helpText, required, options,
    }));
    localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_KEY, JSON.stringify(cleaned));
    alert("Form Saved!");
  };

  return (
    <FormContext.Provider value={{ fields, setFields, handleChange, handleDelete, handleSave }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used inside FormProvider");
  return ctx;
};
