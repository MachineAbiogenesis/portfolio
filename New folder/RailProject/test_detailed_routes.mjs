import {
    getTrainsForRoute,
    centralLineOrder,
    harbourLineOrder,
    westernLineOrder,
    transHarbourOrder,
    harbourStandardOrder,
    harbourWesternOrder
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

// Helper to determine which line(s) a station belongs to
function getStationLines(station) {
    const lines = [];
    const stationLower = station.toLowerCase();

    if (centralLineOrder.find(s => s.toLowerCase() === stationLower)) lines.push('Central');
    if (harbourStandardOrder.find(s => s.toLowerCase() === stationLower)) lines.push('HarbourStd');
    if (harbourWesternOrder.find(s => s.toLowerCase() === stationLower)) lines.push('HarbourWest');
    if (westernLineOrder.find(s => s.toLowerCase() === stationLower)) lines.push('Western');
    if (transHarbourOrder.find(s => s.toLowerCase() === stationLower)) lines.push('TransHarbour');

    return lines;
}

// Categorize route type
function categorizeRoute(from, to) {
    const fromLines = getStationLines(from);
    const toLines = getStationLines(to);

    // Find common lines
    const commonLines = fromLines.filter(l => toLines.includes(l));

    if (commonLines.length > 0) {
        return { type: 'same-line', fromLines, toLines, commonLines };
    }

    // Determine transfer type
    const fromLineStr = fromLines.sort().join('+');
    const toLineStr = toLines.sort().join('+');

    return {
        type: 'cross-line',
        fromLines,
        toLines,
        transferKey: `${fromLineStr} → ${toLineStr}`
    };
}

console.log(`\n${'═'.repeat(60)}`);
console.log(`  DETAILED getTrainsForRoute TEST ANALYSIS`);
console.log(`${'═'.repeat(60)}\n`);

console.log(`Total Unique Stations: ${totalStations}`);
console.log(`Expected Combinations: ${totalStations * (totalStations - 1)}`);
console.log(`${'─'.repeat(60)}\n`);

let successCount = 0;
let failCount = 0;
let errorCount = 0;

// Categorized failure tracking
const failuresByCategory = {};
const failuresByTransfer = {};
const sameLineFailures = [];

const startTime = Date.now();
const testTime = "10:00"; // Test during peak hours

for (let i = 0; i < totalStations; i++) {
    for (let j = 0; j < totalStations; j++) {
        if (i === j) continue;

        const from = stationList[i];
        const to = stationList[j];
        const category = categorizeRoute(from, to);

        try {
            const result = getTrainsForRoute(from, to, testTime);

            if (result && result.trains && result.trains.length > 0) {
                successCount++;
            } else if (result && result.transferMsg) {
                // Transfer logic worked but no trains - still a success for logic
                successCount++;
            } else {
                failCount++;

                if (category.type === 'same-line') {
                    sameLineFailures.push({ from, to, lines: category.commonLines });
                } else {
                    const key = category.transferKey;
                    if (!failuresByTransfer[key]) {
                        failuresByTransfer[key] = [];
                    }
                    failuresByTransfer[key].push({ from, to, fromLines: category.fromLines, toLines: category.toLines });
                }
            }
        } catch (e) {
            errorCount++;
            if (!failuresByCategory['errors']) failuresByCategory['errors'] = [];
            failuresByCategory['errors'].push({ from, to, error: e.message });
        }
    }
}

const endTime = Date.now();
const duration = (endTime - startTime) / 1000;

// Print Summary
console.log(`\n${'═'.repeat(60)}`);
console.log(`  RESULTS SUMMARY`);
console.log(`${'═'.repeat(60)}\n`);

console.log(`✅ Successes:    ${successCount}`);
console.log(`❌ Failures:     ${failCount}`);
console.log(`⚠️  Errors:       ${errorCount}`);
console.log(`📊 Success Rate: ${((successCount / (successCount + failCount + errorCount)) * 100).toFixed(2)}%`);
console.log(`⏱️  Duration:     ${duration.toFixed(2)}s`);

// Same-line failures (should be minimal)
if (sameLineFailures.length > 0) {
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`  SAME-LINE FAILURES (Critical - Logic Issue)`);
    console.log(`${'═'.repeat(60)}\n`);
    console.log(`Total: ${sameLineFailures.length}`);

    // Group by line
    const byLine = {};
    sameLineFailures.forEach(f => {
        const key = f.lines.join('/');
        if (!byLine[key]) byLine[key] = [];
        byLine[key].push(f);
    });

    Object.entries(byLine).sort((a, b) => b[1].length - a[1].length).forEach(([line, failures]) => {
        console.log(`\n  📍 ${line}: ${failures.length} failures`);
        failures.slice(0, 3).forEach(f => {
            console.log(`      ${f.from} → ${f.to}`);
        });
        if (failures.length > 3) {
            console.log(`      ... and ${failures.length - 3} more`);
        }
    });
}

// Cross-line failures (expected, categorized by transfer type)
const crossLineTotal = Object.values(failuresByTransfer).reduce((sum, arr) => sum + arr.length, 0);
if (crossLineTotal > 0) {
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`  CROSS-LINE FAILURES (By Transfer Type)`);
    console.log(`${'═'.repeat(60)}\n`);
    console.log(`Total: ${crossLineTotal}\n`);

    // Sort by count descending
    const sortedTransfers = Object.entries(failuresByTransfer)
        .sort((a, b) => b[1].length - a[1].length);

    sortedTransfers.forEach(([transferType, failures]) => {
        console.log(`\n  🔄 ${transferType}: ${failures.length} failures`);
        failures.slice(0, 3).forEach(f => {
            console.log(`      ${f.from} [${f.fromLines}] → ${f.to} [${f.toLines}]`);
        });
        if (failures.length > 3) {
            console.log(`      ... and ${failures.length - 3} more`);
        }
    });
}

// Errors
if (failuresByCategory['errors'] && failuresByCategory['errors'].length > 0) {
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`  ERRORS (Runtime Issues)`);
    console.log(`${'═'.repeat(60)}\n`);
    failuresByCategory['errors'].slice(0, 5).forEach(e => {
        console.log(`  ${e.from} → ${e.to}: ${e.error}`);
    });
}

// Recommendations
console.log(`\n${'═'.repeat(60)}`);
console.log(`  RECOMMENDATIONS`);
console.log(`${'═'.repeat(60)}\n`);

if (sameLineFailures.length > 0) {
    console.log(`⚠️  CRITICAL: ${sameLineFailures.length} same-line routes are failing.`);
    console.log(`   These should work with existing line data. Check:`);
    console.log(`   - Station name mappings in stationNameToCode`);
    console.log(`   - Train schedule data coverage\n`);
}

if (crossLineTotal > 0) {
    console.log(`📋 Cross-line failures breakdown:`);
    const sortedTransfers = Object.entries(failuresByTransfer)
        .sort((a, b) => b[1].length - a[1].length);

    sortedTransfers.slice(0, 5).forEach(([type, failures]) => {
        console.log(`   - ${type}: ${failures.length} routes need transfer logic or train data`);
    });
}

console.log(`\n${'═'.repeat(60)}`);
console.log(`  END OF REPORT`);
console.log(`${'═'.repeat(60)}\n`);
