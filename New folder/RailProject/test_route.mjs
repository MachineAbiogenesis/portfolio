// Test: Virar to Ulhasnagar route
import { getTrainsForRoute } from './src/data/timings.js';

const result = getTrainsForRoute('Virar', 'Ulhasnagar', '10:00');

console.log('═══════════════════════════════════════════');
console.log('  Route: Virar → Ulhasnagar');
console.log('═══════════════════════════════════════════');
console.log('');
console.log('Line:', result.line || 'N/A');
console.log('Direction:', result.direction || 'N/A');
console.log('Interchange:', result.interchange || 'N/A');
console.log('Transfer:', result.transferMsg || 'N/A');
console.log('Trains found:', result.trains?.length || 0);

if (result.trains && result.trains.length > 0) {
    console.log('');
    console.log('Next trains from Virar:');
    result.trains.slice(0, 5).forEach((t, i) => {
        console.log(`  ${i + 1}. ${t.trainNo} - ${t.time} (${t.type}) → ${t.destination} [wait: ${t.minutesUntil} min]`);
    });
} else {
    console.log('');
    console.log('❌ No trains found for this route');
}
