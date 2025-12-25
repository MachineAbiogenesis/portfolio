import React, { useMemo } from 'react';
import { Search, Train, MapPin, Loader2 } from 'lucide-react';
import AutocompleteInput from './AutocompleteInput';

const Sidebar = ({
    source,
    setSource,
    destination,
    setDestination,
    onSearch,
    stations,
    routePath,
    isLoading = false
}) => {
    // Memoize validation to prevent redundant array lookups
    const isValid = useMemo(() => {
        return source && destination &&
            stations.some(s => s.name === source) &&
            stations.some(s => s.name === destination);
    }, [source, destination, stations]);

    const handleSearch = () => {
        if (isValid && !isLoading) {
            onSearch();
        }
    };

    const handleSwap = () => {
        if (!isLoading) {
            const temp = source;
            setSource(destination);
            setDestination(temp);
        }
    };

    return (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-[95%] max-w-4xl animate-fadeIn">
            <div className="glass rounded-2xl shadow-2xl px-6 py-4 border border-white/30">
                <div className="flex flex-wrap items-center gap-5">
                    {/* Header with icon */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                            <Train className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold gradient-text leading-tight">
                                Mumbai Railway
                            </h1>
                            <p className="text-xs text-gray-500 font-medium">Find the shortest route</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                    {/* Input Fields - Horizontal */}
                    <div className="flex flex-1 items-center gap-3 min-w-0">
                        <div className="flex-1 min-w-[140px]">
                            <AutocompleteInput
                                label="From"
                                value={source}
                                onChange={setSource}
                                options={stations}
                                placeholder="Source station..."
                                icon="source"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Swap Arrow */}
                        <button
                            onClick={handleSwap}
                            disabled={isLoading}
                            className="flex-shrink-0 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400 cursor-pointer hover:bg-gray-200 hover:text-indigo-600 transition-all transform hover:rotate-180 disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Swap locations"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                        </button>

                        <div className="flex-1 min-w-[140px]">
                            <AutocompleteInput
                                label="To"
                                value={destination}
                                onChange={setDestination}
                                options={stations}
                                placeholder="Destination station..."
                                icon="destination"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Search Button */}
                        <button
                            onClick={handleSearch}
                            disabled={!isValid || isLoading}
                            className={`flex-shrink-0 py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${isValid && !isLoading
                                ? 'btn-primary shadow-lg hover:shadow-xl'
                                : 'bg-gray-300 cursor-not-allowed'
                                }`}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span className="hidden sm:inline">Finding...</span>
                                </>
                            ) : (
                                <>
                                    <Search className="w-5 h-5" />
                                    <span className="hidden sm:inline">Find Route</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
