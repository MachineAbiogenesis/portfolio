import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, MapPin, Navigation } from 'lucide-react';

const AutocompleteInput = ({
    label,
    value,
    onChange,
    options,
    placeholder,
    disabled = false,
    icon = 'source'
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

    const IconComponent = icon === 'source' ? MapPin : Navigation;
    const iconColor = icon === 'source' ? 'text-emerald-500' : 'text-rose-500';

    return (
        <div className="relative" ref={dropdownRef}>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                {label}
            </label>
            <div className="relative group">
                <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${iconColor} transition-colors group-focus-within:scale-110`}>
                    <IconComponent className="w-4 h-4" />
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="w-full pl-10 pr-10 py-2.5 border-2 border-gray-200 rounded-xl bg-white/80 focus:bg-white focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm font-medium text-gray-800 placeholder:text-gray-400"
                />
                <ChevronDown
                    className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-500' : ''}`}
                />
            </div>

            {isOpen && filteredOptions.length > 0 && (
                <div className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-2xl max-h-60 overflow-y-auto custom-scrollbar animate-fadeIn">
                    {filteredOptions.map((option, index) => (
                        <div
                            key={option.id}
                            onClick={() => handleOptionClick(option)}
                            className={`px-4 py-3 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 cursor-pointer transition-all duration-150 ${index !== filteredOptions.length - 1 ? 'border-b border-gray-100' : ''
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <MapPin className="w-4 h-4 text-gray-500" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800 text-sm">{option.name}</div>
                                    <div className="text-xs text-gray-500">
                                        <span className={`inline-block w-2 h-2 rounded-full mr-1.5 ${option.line === 'Western' ? 'bg-blue-500' :
                                                option.line === 'Central' ? 'bg-red-500' :
                                                    option.line === 'Harbour' ? 'bg-green-500' : 'bg-gray-500'
                                            }`}></span>
                                        {option.line} Line
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {isOpen && filteredOptions.length === 0 && value && (
                <div className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-2xl p-4 animate-fadeIn">
                    <div className="flex items-center gap-3 text-gray-500">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-gray-400" />
                        </div>
                        <p className="text-sm">No stations found</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AutocompleteInput;
