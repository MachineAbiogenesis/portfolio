import { connections, stationMap } from '../data/stations';

/**
 * Find shortest path between two stations using BFS algorithm
 * @param {string} sourceId - Source station ID
 * @param {string} destinationId - Destination station ID
 * @returns {Array|null} - Array of station IDs representing the path, or null if no path exists
 */
export function findShortestPath(sourceId, destinationId) {
    if (!sourceId || !destinationId) {
        return null;
    }

    if (sourceId === destinationId) {
        return [sourceId];
    }

    // Check if both stations exist
    if (!stationMap[sourceId] || !stationMap[destinationId]) {
        return null;
    }

    // BFS implementation
    const queue = [[sourceId]];
    const visited = new Set([sourceId]);

    while (queue.length > 0) {
        const path = queue.shift();
        const currentStation = path[path.length - 1];

        // Get neighbors of current station
        const neighbors = connections[currentStation] || [];

        for (const neighbor of neighbors) {
            if (neighbor === destinationId) {
                // Found the destination
                return [...path, neighbor];
            }

            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }

    // No path found
    return null;
}

/**
 * Get station details for a path
 * @param {Array} path - Array of station IDs
 * @returns {Array} - Array of station objects
 */
export function getPathStations(path) {
    if (!path) return [];
    return path.map(id => stationMap[id]).filter(Boolean);
}
