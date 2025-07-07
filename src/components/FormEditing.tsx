import React from 'react'
import type { Field } from '../types';

interface FormEditingProps {
    onChange: (updated: Field) => void;
    field: Field;
    isEditing: boolean;
}

export const FormEditing: React.FC<FormEditingProps> = ({ onChange, field, isEditing }) => {

    const handleOptionChange = (value: string) => {
        onChange({ ...field, options: value });
    };

    return (
        <div className="bg-gray-100 p-4 rounded space-y-3">
            {isEditing ? (
                <>
                    <div>
                        <label className="text-sm block mb-1 text-gray-700">Label</label>
                        <input
                            type="text"
                            placeholder="Add field label"
                            value={field.label || ""}
                            onChange={(e) => onChange({ ...field, label: e.target.value })}
                            className="w-full p-2 border rounded text-sm"
                        />
                    </div>

                    <div>
                        <label className="text-sm block mb-1 text-gray-700">Help text</label>
                        <input
                            type="text"
                            placeholder="Add help text"
                            value={field.helpText || ""}
                            onChange={(e) => onChange({ ...field, helpText: e.target.value })}
                            className="w-full p-2 border rounded text-sm"
                        />
                    </div>

                    <div>
                        <label className="text-sm block mb-1 text-gray-700">Field type</label>
                        <select
                            value={field.type}
                            onChange={(e) => onChange({ ...field, type: e.target.value as Field["type"] })}
                            className="w-full p-2 border rounded text-sm bg-white"
                        >
                            <option value="text">Short Answer</option>
                            <option value="textarea">Paragraph</option>
                            <option value="dropdown">Dropdown</option>
                            <option value="radio">Radio</option>
                            <option value="boolean">Yes / No</option>
                            <option value="upload">Upload</option>
                            <option value="image">Image</option>
                        </select>
                    </div>

                    {(field.type === "dropdown" || field.type === "radio") && (
                        <div>
                            <label className="text-sm block mb-1 text-gray-700">
                                Options (comma separated)
                            </label>
                            <input
                                type="text"
                                placeholder="Option 1, Option 2"
                                value={field.options || ""}
                                onChange={(e) => handleOptionChange(e.target.value)}
                                className="w-full p-2 border rounded text-sm"
                            />
                        </div>
                    )}
                </>
            ) : (
                <div className="space-y-2">
                    <div>
                        <label className="text-xs text-gray-500">Label</label>
                        <p className="text-sm font-medium text-gray-800">{field.label}</p>
                    </div>

                    <div className="text-gray-500 text-sm">{field.helpText}</div>

                    {/* Render preview based on field type */}
                    {field.type === "text" && (
                        <input type="text" placeholder="Short answer" disabled className="w-full p-2 border rounded text-sm" />
                    )}
                    {field.type === "textarea" && (
                        <textarea placeholder="Paragraph" disabled className="w-full p-2 border rounded text-sm" />
                    )}
                    {field.type === "dropdown" && (
                        <select disabled className="w-full p-2 border rounded text-sm">
                            {(field.options || "").split(",").map((opt : any, idx : any) => (
                                <option key={idx}>{opt.trim()}</option>
                            ))}
                        </select>
                    )}
                    {field.type === "radio" && (
                        <div className="space-y-1">
                            {(field.options || "").split(",").map((opt :any, idx:any) => (
                                <label key={idx} className="block text-sm text-gray-700">
                                    <input type="radio" name={field.id} className="mr-2" disabled />
                                    {opt.trim()}
                                </label>
                            ))}
                        </div>
                    )}
                    {field.type === "boolean" && (
                        <label className="inline-flex items-center text-sm text-gray-700">
                            <input type="checkbox" className="mr-2" disabled /> Yes / No
                        </label>
                    )}
                    {field.type === "upload" && (
                        <input type="file" className="w-full border p-2 text-sm" disabled />
                    )}
                    {field.type === "image" && (
                        <div className="border p-4 rounded text-sm text-center text-gray-400 bg-white">
                            Image Upload Preview
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
