import React, { useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Polyline, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Component to handle map bounds fitting
const FitBounds = ({ bounds }) => {
    const map = useMap();

    useEffect(() => {
        if (bounds && bounds.length > 0) {
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [bounds, map]);

    return null;
};

const Map = ({ stations, connections, routePath }) => {
    const mapRef = useRef(null);

    // Maharashtra bounds (approximate bounding box)
    const maharashtraBounds = [
        [15.6, 72.6],  // Southwest corner
        [22.0, 80.9]   // Northeast corner
    ];

    // Memoize connections to prevent recalculation on every render
    const allConnections = useMemo(() => {
        const conn = [];
        Object.entries(connections).forEach(([stationId, neighbors]) => {
            const station = stations.find(s => s.id === stationId);
            if (station) {
                neighbors.forEach(neighborId => {
                    const neighbor = stations.find(s => s.id === neighborId);
                    if (neighbor) {
                        conn.push([
                            [station.lat, station.lng],
                            [neighbor.lat, neighbor.lng]
                        ]);
                    }
                });
            }
        });
        return conn;
    }, [stations, connections]);

    // Create route polyline if path exists
    const routePolyline = routePath && routePath.length > 0
        ? routePath.map(station => [station.lat, station.lng])
        : null;

    // Calculate bounds for route
    const routeBounds = routePolyline && routePolyline.length > 0
        ? routePolyline
        : null;

    // Determine if a station is on the active route
    const isOnRoute = (stationId) => {
        return routePath && routePath.some(s => s.id === stationId);
    };

    const isSourceOrDestination = (stationId) => {
        if (!routePath || routePath.length === 0) return false;
        return stationId === routePath[0].id || stationId === routePath[routePath.length - 1].id;
    };

    return (
        <MapContainer
            center={[19.0760, 72.8777]} // Mumbai center
            zoom={11}
            minZoom={8}
            maxBounds={maharashtraBounds}
            maxBoundsViscosity={1.0}
            style={{ height: '100vh', width: '100vw' }}
            ref={mapRef}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Fit bounds to route if exists */}
            {routeBounds && <FitBounds bounds={routeBounds} />}

            {/* Draw all network connections (faint gray) */}
            {allConnections.map((connection, index) => (
                <Polyline
                    key={`connection-${index}`}
                    positions={connection}
                    pathOptions={{
                        color: '#d1d5db',
                        weight: 2,
                        opacity: 0.4,
                    }}
                />
            ))}

            {/* Draw active route (bold colored) */}
            {routePolyline && (
                <Polyline
                    positions={routePolyline}
                    pathOptions={{
                        color: '#2563eb',
                        weight: 6,
                        opacity: 0.8,
                    }}
                />
            )}

            {/* Draw station markers */}
            {stations.map((station) => {
                const onRoute = isOnRoute(station.id);
                const isEndpoint = isSourceOrDestination(station.id);

                return (
                    <CircleMarker
                        key={station.id}
                        center={[station.lat, station.lng]}
                        radius={isEndpoint ? 10 : onRoute ? 7 : 5}
                        pathOptions={{
                            fillColor: isEndpoint ? '#dc2626' : onRoute ? '#2563eb' : '#6b7280',
                            fillOpacity: isEndpoint ? 1 : onRoute ? 0.9 : 0.6,
                            color: '#ffffff',
                            weight: isEndpoint ? 3 : onRoute ? 2 : 1,
                        }}
                    >
                        <Popup>
                            <div className="text-center">
                                <p className="font-semibold text-gray-800">{station.name}</p>
                                <p className="text-xs text-gray-600">{station.line} Line</p>
                            </div>
                        </Popup>
                    </CircleMarker>
                );
            })}
        </MapContainer>
    );
};

export default Map;
