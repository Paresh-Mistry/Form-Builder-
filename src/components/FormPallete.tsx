import React, { useState } from "react";
import type { FieldType } from "../types";
import {
    Type,
    AlignLeft,
    List,
    CircleDot,
    ToggleLeft,
    Upload,
    ImageIcon,
    Search,
    Plus,
    Calendar,
    Clock,
    Link,
    Mail,
    Star,
    Eye,
    DollarSign,
} from "lucide-react";


interface FieldPaletteProps {
    onDragStart: (e: React.DragEvent<HTMLDivElement>, field: { label: string; type: FieldType, icon: React.FC }) => void;
}


const groupedFieldTypes = [
    {
        title: "TEXT ELEMENTS",
        fields: [
            { label: "Short Answer", type: "text", icon: Type },
            { label: "Paragraph", type: "textarea", icon: AlignLeft },
            { label: "Email", type: "email", icon: Mail },
            { label: "URL", type: "url", icon: Link },
            { label: "Password", type: "password", icon: Eye },
        ],
    },
    {
        title: "CHOICE INPUTS",
        fields: [
            { label: "Dropdown", type: "dropdown", icon: List },
            { label: "Radio Buttons", type: "radio", icon: CircleDot },
            { label: "Yes / No", type: "boolean", icon: ToggleLeft },
            { label: "Rating", type: "rating", icon: Star },
            { label: "Button", type: "button", icon: Plus },
        ],
    },
    {
        title: "DATE & TIME",
        fields: [
            { label: "Date", type: "date", icon: Calendar },
            { label: "Time", type: "time", icon: Clock },
        ],
    },
    {
        title: "UPLOAD & MEDIA",
        fields: [
            { label: "File Upload", type: "upload", icon: Upload },
            { label: "Image", type: "image", icon: ImageIcon },
        ],
    },
    {
        title: "OTHERS",
        fields: [
            { label: "Currency", type: "currency", icon: DollarSign },
        ],
    },
];



export const FormPalette: React.FC<FieldPaletteProps> = ({ onDragStart }) => {


     const [inputVal, setInputVal] = useState("");

    const filteredGroups = groupedFieldTypes.map((group) => ({
        ...group,
        fields: group.fields.filter((field) =>
            field.label.toLowerCase().includes(inputVal.toLowerCase())
        ),
    })).filter((group) => group.fields.length > 0);



    return (
        <div className="p-4 shadow-md w-1/4 bg-gray-50 overflow-auto min-h-screen">
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
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                />

                <Search size={18} />
            </div>

            {filteredGroups.map((group) => (
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
