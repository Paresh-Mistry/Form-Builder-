import React from 'react'
import type { Field } from '../types';
import { Clock } from 'lucide-react';

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


                    <div className="text-gray-500 text-sm">{field.helpText}</div>

                    {field.type === "text" && (
                        <input type="text" placeholder={"Enter " + field.label} disabled className="w-full p-2 border border-gray-400 rounded text-sm" />
                    )}

                    {field.type === "textarea" && (
                        <textarea placeholder={"Enter " + field.label} disabled className="w-full p-2 border border-gray-400 rounded text-sm" />
                    )}

                    {field.type === "email" && (
                        <input type="email" placeholder={"Enter " + field.label} disabled className="w-full p-2 border border-gray-400 rounded text-sm" />
                    )}

                    {field.type === "url" && (
                        <input type="url" placeholder={"Enter " + field.label} disabled className="w-full p-2 border border-gray-400 rounded text-sm" />
                    )}

                    {field.type === "password" && (
                        <input type="password" placeholder={"Enter " + field.label} disabled className="w-full p-2 border border-gray-400 rounded text-sm" />
                    )}

                    {field.type === "dropdown" && (
                        <select disabled className="w-full p-2 border rounded text-sm">
                            {(field.options || "").split(",").map((opt, idx) => (
                                <option key={idx}>{opt.trim()}</option>
                            ))}
                        </select>
                    )}

                    {field.type === "radio" && (
                        <div className="space-y-1">
                            {(field.options || "").split(",").map((opt, idx) => (
                                <label key={idx} className="block text-sm text-gray-700">
                                    <input type="radio" name={field.id} className="mr-2" disabled />
                                    {opt.trim()}
                                </label>
                            ))}
                        </div>
                    )}

                    {field.type === "boolean" && (
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" checked />
                                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400 dark:peer-checked:bg-blue-400"></div>
                                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{field.label}</span>
                        </label>
                    )}
                    

                    {field.type === "rating" && (
                        <div className="flex space-x-1 text-yellow-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                    )}



                    {field.type === "button" && (
                        <input
                            type="submit"
                            value={field.label || "Submit"}
                            className="border bg-blue-500 w-full py-3 rounded text-sm text-center text-white cursor-not-allowed"
                            disabled
                        />
                    )}



                    {field.type === "date" && (
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input disabled id="default-datepicker" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5" placeholder="Select date" />
                        </div>

                    )}



                    {field.type === "time" && (
                        <form className=" mx-auto">
                            <div className="flex">
                                <input type="time" id="time" className="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5" min="09:00" max="18:00" value="00:00" required />
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 border-s-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <Clock />
                                </span>
                            </div>
                        </form>

                    )}



                    {field.type === "upload" && (
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{field.label}</span> or drag and drop</p>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{field.helpText}</span></p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input disabled id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>

                    )}



                    {field.type === "image" && (
                        <div className="border p-4 rounded text-sm text-center text-gray-400 bg-white">
                            Image Upload Preview
                        </div>
                    )}

                    {field.type === "currency" && (
                        <input
                            type="text"
                            placeholder={"₹ Enter " + field.label}
                            disabled
                            className="w-full p-2 border rounded text-sm"
                        />
                    )}

                </div>
            )}
        </div>
    )
}
