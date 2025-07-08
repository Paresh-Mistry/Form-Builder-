import { Save } from 'lucide-react';
import { useFormContext } from '../context/FormContext';
import type React from 'react';

const Navbar: React.FC = () => {

    const { handleSave } = useFormContext() || {};

    return (

        <nav className="bg-white shadow-sm px-6 py-3 flex items-center justify-between border-b">
            <div className="flex items-center gap-2">
                <a href='/' className="font-semibold text-lg text-gray-800">FormBuilder</a>
            </div>

            <div className="text-gray-600 text-sm font-medium hidden sm:block">
                Creating New Form
            </div>

            <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-black" onClick={() => handleSave()}>
                    <Save size={18} />
                    Save
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
