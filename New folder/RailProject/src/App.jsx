import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import { stations, connections } from './data/stations';
import { findShortestPath, getPathStations } from './utils/pathfinding';
import './index.css';

function App() {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [routePath, setRoutePath] = useState(null);

    const handleSearch = () => {
        // Find station IDs from names
        const sourceStation = stations.find(s => s.name === source);
        const destinationStation = stations.find(s => s.name === destination);

        if (sourceStation && destinationStation) {
            // Find shortest path using BFS
            const path = findShortestPath(sourceStation.id, destinationStation.id);

            if (path) {
                // Convert path IDs to station objects
                const pathStations = getPathStations(path);
                setRoutePath(pathStations);
            } else {
                setRoutePath(null);
                alert('No route found between these stations');
            }
        }
    };

    return (
        <div className="relative w-full h-full">
            <Map
                stations={stations}
                connections={connections}
                routePath={routePath}
            />
            <Sidebar
                source={source}
                setSource={setSource}
                destination={destination}
                setDestination={setDestination}
                onSearch={handleSearch}
                stations={stations}
                routePath={routePath}
            />
        </div>
    );
}

export default App;
