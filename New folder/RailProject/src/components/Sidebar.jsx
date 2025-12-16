import React from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import AutocompleteInput from './AutocompleteInput';

const Sidebar = ({
    source,
    setSource,
    destination,
    setDestination,
    onSearch,
    stations,
    routePath
}) => {
    const isValid = source && destination &&
        stations.some(s => s.name === source) &&
        stations.some(s => s.name === destination);

    const handleSearch = () => {
        if (isValid) {
            onSearch();
        }
    };

    return (
        <div className="absolute top-6 left-6 z-[1000] w-96 max-w-[calc(100vw-3rem)]">
            <div className="glass rounded-2xl shadow-2xl p-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">
                        Mumbai Railway
                    </h1>
                    <p className="text-sm text-gray-600">Find the shortest route</p>
                </div>

                {/* Input Fields */}
                <div className="space-y-4 mb-6">
                    <AutocompleteInput
                        label="Source Station"
                        value={source}
                        onChange={setSource}
                        options={stations}
                        placeholder="Enter source station..."
                    />

                    <AutocompleteInput
                        label="Destination Station"
                        value={destination}
                        onChange={setDestination}
                        options={stations}
                        placeholder="Enter destination station..."
                    />
                </div>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    disabled={!isValid}
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${isValid
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                            : 'bg-gray-300 cursor-not-allowed'
                        }`}
                >
                    <Search className="w-5 h-5" />
                    Find Route
                </button>

                {/* Route Summary */}
                {routePath && routePath.length > 0 && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 animate-fadeIn">
                        <div className="flex items-center gap-2 mb-3">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <h3 className="font-semibold text-gray-800">Route Summary</h3>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Total Stations:</span>
                                <span className="font-semibold text-gray-800">{routePath.length}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Stops:</span>
                                <span className="font-semibold text-gray-800">{routePath.length - 1}</span>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-blue-200">
                            <p className="text-xs font-medium text-gray-600 mb-2">Route:</p>
                            <div className="flex flex-wrap gap-1 items-center text-xs">
                                {routePath.map((station, index) => (
                                    <React.Fragment key={station.id}>
                                        <span className="bg-white px-2 py-1 rounded font-medium text-gray-700 border border-blue-200">
                                            {station.name}
                                        </span>
                                        {index < routePath.length - 1 && (
                                            <ArrowRight className="w-3 h-3 text-blue-400" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
