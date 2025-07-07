import React, { useEffect } from "react";
import FormCanvas from "../components/FormCanvas";
import type { Section } from "../types";
import type { FieldType } from '../types';
import { FormPalette } from "../components/FormPallete";
import { useFormContext } from "../context/FormContext";

// buiding
export const Builder: React.FC = () => {
    const handleSaveTemplate = (templateData: Section[]) => {
        localStorage.setItem('templates', JSON.stringify(templateData));
        alert('Template saved!');
        console.log(templateData)
    };

    const handleExport = (templateData: Section[]) => {
        const exportData = JSON.stringify(templateData, null, 2); // pretty JSON
        const blob = new Blob([exportData], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;   
        a.download = `${"form"}-template.json`;
        a.click();
    };


    const { setHandleSave, setHandleExport } = useFormContext();

    useEffect(() => {
        if (setHandleSave) setHandleSave(() => handleSaveTemplate);
        if (setHandleExport) setHandleExport(() => handleExport);
    }, []);

    const handleDragStart = (
        e: React.DragEvent<HTMLDivElement>,
        field: { type: FieldType; label: string }
    ) => {
        e.dataTransfer.setData('field', JSON.stringify(field));
    };


    return (
        <div className="min-h-screen flex bg-gray-100">
            <FormCanvas onSave={handleSaveTemplate} />

            <FormPalette onDragStart={handleDragStart} />
        </div>
    );
};
