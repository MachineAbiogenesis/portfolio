import React, { useState, useEffect } from 'react';
import { Train, RefreshCw, Clock, ArrowUp, ArrowDown, Info, CheckCircle2, AlertTriangle } from 'lucide-react';
import { getTrainsForRoute, formatMinutesUntil } from '../data/timings';

// Constants
const TIME_UPDATE_INTERVAL = 60000; // Update time every minute
const SCHEDULE_LOAD_DELAY = 300; // Delay for smooth UI transition
const MAX_TRAINS_DISPLAY = 3; // Show top 3 trains

const TrainScheduleCard = ({ routePath }) => {
    const [trainSchedule, setTrainSchedule] = useState({
        trains: [],
        direction: null,
        line: null,
        interchange: null,
        transferMsg: null // Initialize as null
    });
    const [currentTime, setCurrentTime] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Update current time every minute
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            setCurrentTime(timeStr);
        };

        updateTime();
        const interval = setInterval(updateTime, TIME_UPDATE_INTERVAL);
        return () => clearInterval(interval);
    }, []);

    // Load train schedule when route is found
    useEffect(() => {
        if (routePath && routePath.length >= 2 && currentTime) {
            setIsLoading(true);
            const fromStation = routePath[0].name;
            const toStation = routePath[routePath.length - 1].name;

            setTimeout(() => {
                const schedule = getTrainsForRoute(fromStation, toStation, currentTime, MAX_TRAINS_DISPLAY);
                console.log("Train Schedule Result:", schedule);
                setTrainSchedule(schedule);
                setIsLoading(false);
            }, SCHEDULE_LOAD_DELAY);
        } else {
            setTrainSchedule({ trains: [], direction: null, line: null, interchange: null, transferMsg: null });
        }
    }, [routePath, currentTime]);

    const refreshSchedule = () => {
        if (routePath && routePath.length >= 2 && currentTime) {
            setIsLoading(true);
            const fromStation = routePath[0].name;
            const toStation = routePath[routePath.length - 1].name;

            setTimeout(() => {
                const schedule = getTrainsForRoute(fromStation, toStation, currentTime, MAX_TRAINS_DISPLAY);
                setTrainSchedule(schedule);
                setIsLoading(false);
            }, SCHEDULE_LOAD_DELAY);
        }
    };

    const getTrainTypeBadge = (type) => {
        switch (type) {
            case 'F':
                return { label: 'Fast', color: 'bg-red-500/10 text-red-600 border border-red-500/20' };
            case 'SF':
                return { label: 'Semi', color: 'bg-amber-500/10 text-amber-600 border border-amber-500/20' };
            default:
                return { label: 'Slow', color: 'bg-indigo-500/10 text-indigo-600 border border-indigo-500/20' };
        }
    };

    // Don't render if no trains
    if (!routePath || !trainSchedule.trains || trainSchedule.trains.length === 0) {
        return null;
    }

    const fromStation = routePath[0]?.name || '';

    return (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-[1000] w-[95%] max-w-sm animate-slideUp">
            <div className="glass rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                {/* Header */}
                <div className="px-4 py-3 bg-white/50 border-b border-white/20 flex items-center justify-between backdrop-blur-md">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
                            <Train className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-800">Next Trains</h4>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Direction indicator */}
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-white/50 rounded-lg border border-gray-100">
                            {trainSchedule.direction === 'DOWN' ? (
                                <ArrowDown className="w-3.5 h-3.5 text-green-600" />
                            ) : (
                                <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
                            )}
                            <span className={`text-xs font-bold ${trainSchedule.direction === 'DOWN' ? 'text-green-600' : 'text-blue-600'}`}>
                                {trainSchedule.direction}
                            </span>
                            <span className="text-gray-300">|</span>
                            <span className="text-xs text-gray-600 font-medium">{trainSchedule.line}</span>
                        </div>

                        <button
                            onClick={refreshSchedule}
                            disabled={isLoading}
                            className="p-1.5 rounded-lg hover:bg-white/60 transition-colors border border-gray-200/50"
                            title="Refresh schedule"
                        >
                            <RefreshCw className={`w-4 h-4 text-gray-500 ${isLoading ? 'animate-spin' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Transfer Message Alert - Using Standard Yellow Colors */}
                {trainSchedule.transferMsg && (
                    <div className="mx-3 mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-xl flex gap-3 items-start shadow-sm">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                            <h5 className="text-sm font-bold text-yellow-800">Transfer Required</h5>
                            <p className="text-xs text-yellow-700 leading-snug mt-0.5 font-medium">
                                {trainSchedule.transferMsg}
                            </p>
                        </div>
                    </div>
                )}

                {/* Train List */}
                <div className="p-3 space-y-2 bg-white/40">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-8">
                            <div className="flex items-center gap-2 text-gray-500">
                                <RefreshCw className="w-4 h-4 animate-spin" />
                                <span className="text-sm font-medium">Updating...</span>
                            </div>
                        </div>
                    ) : (
                        trainSchedule.trains.map((train, index) => {
                            const typeBadge = getTrainTypeBadge(train.type);
                            const isNext = index === 0;

                            // Format destination code to readable name
                            const destMap = {
                                'KYN': 'Kalyan',
                                'KSRA': 'Kasara',
                                'KJT': 'Karjat',
                                'DI': 'Dombivli',
                                'TNA': 'Thane',
                                'PNVL': 'Panvel',
                                'VSHI': 'Vashi',
                                'CSMT': 'CSMT',
                                'GMN': 'Goregaon',
                                'ADH': 'Andheri'
                            };
                            const destName = destMap[train.destination] || train.destination;

                            return (
                                <div
                                    key={`${train.trainNo}-${index}`}
                                    className={`p-3 rounded-xl transition-all ${isNext
                                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-[1.02]'
                                        : 'bg-white border border-gray-100 hover:border-indigo-100'
                                        }`}
                                >
                                    {/* Destination ─ Time ──── Type ─── ETA */}
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-3 min-w-0">
                                            {/* Time */}
                                            <span className={`font-bold text-lg ${isNext ? 'text-white' : 'text-gray-800'}`}>
                                                {train.time}
                                            </span>

                                            {/* Arrow */}
                                            <span className={`${isNext ? 'text-white/40' : 'text-gray-300'}`}>→</span>

                                            {/* Destination */}
                                            <span className={`font-bold text-sm truncate ${isNext ? 'text-white' : 'text-gray-800'}`}>
                                                {destName}
                                            </span>
                                        </div>

                                        {/* Type Badge */}
                                        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md ${isNext ? 'bg-white/20 text-white border border-white/20' : typeBadge.color
                                            }`}>
                                            {typeBadge.label}
                                        </span>
                                    </div>

                                    {/* ETA Row */}
                                    <div className={`flex items-center justify-between mt-2 pt-2 border-t ${isNext ? 'border-white/20' : 'border-gray-50'}`}>
                                        <span className={`text-[10px] font-medium ${isNext ? 'text-white/60' : 'text-gray-400'}`}>
                                            #{train.trainNo}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className={`w-3.5 h-3.5 ${isNext ? 'text-white/70' : 'text-gray-400'}`} />
                                            <span className={`text-xs font-bold ${isNext ? 'text-white' : 'text-emerald-600'}`}>
                                                {formatMinutesUntil(train.minutesUntil)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Footer */}
                <div className="px-4 py-2 bg-gradient-to-br from-slate-50/80 to-gray-50/80 border-t border-gray-200/50 flex items-center justify-between backdrop-blur-sm">
                    <span className="text-[10px] text-gray-500 flex items-center gap-1.5 font-medium">
                        <Clock className="w-3 h-3 text-gray-400" /> {currentTime}
                    </span>
                    <span className="text-[10px] text-indigo-600/80 font-bold bg-indigo-50 px-2 py-0.5 rounded-full">
                        From {fromStation}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TrainScheduleCard;
