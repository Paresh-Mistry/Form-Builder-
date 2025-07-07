import React, { useState, useEffect } from 'react';
import FieldEditor from './FieldEditor';
import type { Field } from '../types';

interface FormCanvasProps {
  onSave: (fields: Field[]) => void;
}

const FormCanvas: React.FC<FormCanvasProps> = () => {
  const [fields, setFields] = useState<Field[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        setFields(JSON.parse(saved));
      } catch (error) {
        console.error("Failed to load fields from localStorage", error);
      }
    }
  }, []);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const fieldData = JSON.parse(e.dataTransfer.getData('field'));

    const newField: Field = {
      id: crypto.randomUUID(),
      label: '',
      type: fieldData.type,
      isEditing: false,    
      helpText: '',        
    };


    setFields([...fields, newField]);
  };

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

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="flex-1 p-4 bg-white rounded shadow dotted-bg"
    >

      {fields.length === 0 && (
        <p className="text-gray-400 mb-4">Drag fields here to start building.</p>
      )}


      {fields.map((field, index) => (
        <FieldEditor
          key={field.id}
          field={field}
          onChange={(updated) => handleChange(index, updated)}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};

export default FormCanvas;
