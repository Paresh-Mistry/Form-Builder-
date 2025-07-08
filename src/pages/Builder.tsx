import React from "react";
import FormCanvas from "../components/FormCanvas";
import type { FieldType } from '../types';
import { FormPalette } from "../components/FormPallete";


export const Builder: React.FC = () => {

    const handleDragStart = (
        e: React.DragEvent<HTMLDivElement>,
        field: { type: FieldType; label: string }
    ) => {
        e.dataTransfer.setData('field', JSON.stringify(field));
    };


    return (
        <div className="flex bg-gray-100">
            <FormCanvas />

            <FormPalette onDragStart={handleDragStart} />
        </div>
    );
};
