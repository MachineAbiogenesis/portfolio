import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const AutocompleteInput = ({
    label,
    value,
    onChange,
    options,
    placeholder,
    disabled = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (value) {
            const filtered = options.filter(option =>
                option.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions(options);
        }
    }, [value, options]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        onChange(e.target.value);
        setIsOpen(true);
    };

    const handleOptionClick = (option) => {
        onChange(option.name);
        setIsOpen(false);
    };

    const handleInputFocus = () => {
        setIsOpen(true);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
                {label}
            </label>
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <ChevronDown
                    className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {isOpen && filteredOptions.length > 0 && (
                <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto custom-scrollbar animate-fadeIn">
                    {filteredOptions.map((option) => (
                        <div
                            key={option.id}
                            onClick={() => handleOptionClick(option)}
                            className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                        >
                            <div className="font-medium text-gray-800">{option.name}</div>
                            <div className="text-xs text-gray-500 mt-1">{option.line} Line</div>
                        </div>
                    ))}
                </div>
            )}

            {isOpen && filteredOptions.length === 0 && value && (
                <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl p-4 animate-fadeIn">
                    <p className="text-gray-500 text-sm">No stations found</p>
                </div>
            )}
        </div>
    );
};

export default AutocompleteInput;
