import React from "react";
import type { Field } from "../types";
import { Trash2 } from "lucide-react";
import { FormEditing } from "./FormEditing";

interface FieldEditorProps {
    field: Field;
    onChange: (updated: Field) => void;
    onDelete: () => void;
}

const FieldEditor: React.FC<FieldEditorProps> = ({ field, onChange, onDelete }) => {

    const isEditing = field.isEditing ?? true; // default: true

    const handleEdit = () => {
        onChange({ ...field, isEditing: true });
    };
    const handleDone = () => {
        onChange({ ...field, isEditing: false }); // ✅ Toggle edit off
    };


    return (
        <div className="p-4 mt-[10%] rounded mb-4 bg-white shadow-sm w-full max-w-xl my-auto mx-auto">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    📄 {field.type === "text" ? "Short Answer" : field.type.charAt(0).toUpperCase() + field.type.slice(1)}
                </div>

                {isEditing ? (
                    <label className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600">Required</span>
                        <input
                            type="checkbox"
                            checked={field.required || false}
                            onChange={(e) => onChange({ ...field, required: e.target.checked })}
                            className="accent-black"
                        />
                    </label>
                ) : (
                    <div className="text-sm text-gray-500">{field.required ? "Required" : "Optional"}</div>
                )}
            </div>

            {/* Body */}
            <FormEditing
                isEditing={isEditing}
                onChange={onChange}
                field={field}
            />

            {/* Footer */}
            <div className="flex items-center justify-between mt-4">
                <button
                    onClick={onDelete}
                    className="text-red-600 hover:bg-red-100 p-2 rounded-full"
                    title="Delete Field"
                >
                    <Trash2 className="w-5 h-5" />
                </button>

                {isEditing ? (
                    <button
                        onClick={handleDone}
                        className="px-4 py-1 bg-black text-white text-sm rounded hover:bg-gray-800"
                    >
                        Done
                    </button>
                ) : (
                    <button
                        onClick={handleEdit}
                        className="px-4 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-700"
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default FieldEditor;
