import React from "react";
import type { FieldType } from "../types";
import {
    Type,
    AlignLeft,
    List,
    CircleDot,
    ToggleLeft,
    Upload,
    ImageIcon,
    Search
} from "lucide-react";


interface FieldPaletteProps {
    onDragStart: (e: React.DragEvent<HTMLDivElement>, field: { label: string; type: FieldType, icon: React.FC }) => void;
}

// Field types grouped by category
const groupedFieldTypes = [
    {
        title: "TEXT ELEMENTS",
        fields: [
            { label: "Short Answer", type: "text", icon: Type },
            { label: "Paragraph", type: "textarea", icon: AlignLeft },
        ],
    },
    {
        title: "MULTIPLE CHOICE",
        fields: [
            { label: "Dropdown", type: "dropdown", icon: List },
            { label: "Radio", type: "radio", icon: CircleDot },
            { label: "Yes / No", type: "boolean", icon: ToggleLeft },
        ],
    },
    {
        title: "MEDIA ELEMENT",
        fields: [
            { label: "Upload", type: "upload", icon: Upload },
            { label: "Image", type: "image", icon: ImageIcon },
        ],
    },
];


export const FormPalette: React.FC<FieldPaletteProps> = ({ onDragStart }) => {
    return (
        <div className="p-4 shadow-md w-1/4 bg-gray-50">
            <div className="flex text-sm flex-grow mb-4 pb-2 space-x-2">
                <button className="text-center w-full font-semibold px-3 py-2 bg-gray-200 text-black">Field</button>
                <button className="text-center w-full font-semibold px-3 py-2 bg-gray-200 text-black">Permission</button>
            </div>

            <div
                className="flex items-center border mb-4 w-full pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden"
            >
                <input
                    className="w-full h-full pl-5 outline-none placeholder-gray-500 text-sm"
                    placeholder="Search for products"
                    type="text"
                />
                <Search size={18}/>
            </div>

            {groupedFieldTypes.map((group) => (
                <div key={group.title} className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 mb-2">{group.title}</h4>
                    <div className="grid grid-cols-2 gap-3">
                        {group.fields.map((field: any) => {
                            const Icon = field.icon
                            return (
                                <div
                                    key={field.type}
                                    draggable
                                    onDragStart={(e) => onDragStart(e, field)}
                                    className="bg-gray-100 text-gray-800 cursor-grab rounded h-24 flex flex-col items-center justify-center text-sm text-center shadow-sm hover:bg-gray-100"
                                >
                                    <Icon className="w-4 h-4 mb-1 text-gray-800" />
                                    <span className="font-semibold">{field.label}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}

        </div>
    );
};
