import React, { useState } from 'react';
import { Navigation, ArrowRight, MapPin, Clock, ChevronUp } from 'lucide-react';
import { calculateTravelTime, formatTravelTime } from '../data/travelTimes';

const RouteSummary = ({ routePath }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!routePath || routePath.length === 0) return null;

    // Calculate travel time using real timetable data
    const estimatedMinutes = calculateTravelTime(routePath);
    const formattedTime = formatTravelTime(estimatedMinutes);

    // Show only first 2 and last 2 stations when collapsed
    const displayStations = isExpanded ? routePath : [
        ...routePath.slice(0, 2),
        ...(routePath.length > 5 ? [{ id: 'ellipsis', name: `+${routePath.length - 4} more`, isEllipsis: true }] : []),
        ...routePath.slice(-2)
    ];

    const showEllipsis = !isExpanded && routePath.length > 5;

    const fromStation = routePath[0]?.name || '';
    const toStation = routePath[routePath.length - 1]?.name || '';

    return (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[1000] w-[95%] max-w-4xl animate-slideUp">
            <div className="glass rounded-2xl shadow-2xl border border-white/30 overflow-hidden p-4">
                {/* Header Row */}
                <div className="flex items-center gap-4 mb-3">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                            <Navigation className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 text-base leading-tight">Route Found</h3>
                            <p className="text-xs text-gray-500">{fromStation} → {toStation}</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
                        <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm">
                            <MapPin className="w-4 h-4 text-indigo-600" />
                            <span className="font-bold text-indigo-700">{routePath.length}</span>
                            <span className="text-xs text-gray-500">stops</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 shadow-sm">
                            <Clock className="w-4 h-4 text-amber-600" />
                            <span className="font-bold text-amber-700">{formattedTime}</span>
                        </div>
                    </div>
                </div>

                {/* Route Path */}
                <div className={`transition-all duration-300 ${isExpanded ? 'max-h-32 overflow-y-auto' : ''}`}>
                    <div className="flex flex-wrap gap-1.5 items-center">
                        {(showEllipsis ? displayStations : routePath).map((station, index, arr) => (
                            <React.Fragment key={station.id || index}>
                                {station.isEllipsis ? (
                                    <button
                                        onClick={() => setIsExpanded(true)}
                                        className="px-2 py-1 rounded-md text-xs text-indigo-600 hover:bg-indigo-50 transition-colors font-medium"
                                    >
                                        {station.name}
                                    </button>
                                ) : (
                                    <span
                                        className={`px-2.5 py-1 rounded-lg font-medium text-xs transition-all ${index === 0
                                                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-sm'
                                                : (showEllipsis ? index === arr.length - 1 : index === routePath.length - 1)
                                                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-sm'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {station.name}
                                    </span>
                                )}
                                {index < arr.length - 1 && !station.isEllipsis && (
                                    <ArrowRight className="w-3 h-3 text-gray-300 flex-shrink-0" />
                                )}
                            </React.Fragment>
                        ))}
                        {isExpanded && routePath.length > 5 && (
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="ml-2 px-2 py-1 rounded-md text-xs text-gray-500 hover:bg-gray-100 transition-colors"
                            >
                                <ChevronUp className="w-3 h-3 inline" /> Less
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RouteSummary;
