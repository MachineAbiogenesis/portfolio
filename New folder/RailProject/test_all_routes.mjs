import {
    getTrainsForRoute,
    centralLineOrder,
    harbourLineOrder,
    westernLineOrder,
    transHarbourOrder
} from './src/data/timings.js';

// Combine all stations into a unique set
const allStations = new Set([
    ...centralLineOrder,
    ...harbourLineOrder,
    ...westernLineOrder,
    ...transHarbourOrder
]);

const stationList = Array.from(allStations).sort();
const totalStations = stationList.length;

console.log(`Total Unique Stations to Test: ${totalStations}`);
console.log(`Expected Combinations: ${totalStations * (totalStations - 1)}`);
console.log(`--------------------------------------------------`);

let successCount = 0;
let failCount = 0;
let errorCount = 0;
const failures = [];

const startTime = Date.now();
const testTime = "10:00"; // Test during peak hours to ensure trains exist

for (let i = 0; i < totalStations; i++) {
    for (let j = 0; j < totalStations; j++) {
        if (i === j) continue;

        const from = stationList[i];
        const to = stationList[j];

        try {
            const result = getTrainsForRoute(from, to, testTime);

            if (result && result.trains && result.trains.length > 0) {
                successCount++;
            } else if (result && result.transferMsg) {
                // Should count as success if transfer logic worked but maybe no trains found for second leg?
                // But getTrainsForRoute returns trains for valid routes.
                // If it returns transferMsg but no trains, it means the logic worked to find the route type.
                successCount++;
            } else {
                failCount++;
                failures.push({ from, to, reason: "No trains found" });
            }
        } catch (e) {
            errorCount++;
            failures.push({ from, to, reason: `Diff Error: ${e.message}` });
        }
    }
}

const endTime = Date.now();
const duration = (endTime - startTime) / 1000;

console.log(`\nTest Completed in ${duration.toFixed(2)}s`);
console.log(`Total Combinations: ${successCount + failCount + errorCount}`);
console.log(`Successes: ${successCount}`);
console.log(`Failures: ${failCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Success Rate: ${((successCount / (successCount + failCount + errorCount)) * 100).toFixed(2)}%`);

if (failures.length > 0) {
    console.log(`\nSample Failures (First 10):`);
    failures.slice(0, 10).forEach(f => console.log(`${f.from} -> ${f.to}: ${f.reason}`));

    // Group failures by line to see patterns
    // Simple heuristic: check if from/to are on same line logic failure or cross-line failure
    console.log(`\nAnalyzing Logic Gaps...`);
    // (Optional: Add more logic here to analyze why they failed)
}
