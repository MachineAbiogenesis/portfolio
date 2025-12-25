// Station-to-station travel times in minutes based on real Mumbai local train schedules
// Calculated from the timetable data

export const travelTimes = {
    // Central Line - CSMT to Kalyan direction (adjusted from timetable: CSMT→Thane ~54min, CSMT→Kalyan ~88min)
    'csmt-masjid': 3,
    'masjid-sandhurst-road': 2,
    'sandhurst-road-byculla': 3,
    'byculla-chinchpokli': 2,
    'chinchpokli-currey-road': 2,
    'currey-road-parel': 2,
    'parel-dadar-central': 4,       // Dadar is ~18 min from CSMT
    'dadar-central-matunga': 3,
    'matunga-sion': 4,
    'sion-kurla': 5,                // Kurla is ~28 min from CSMT
    'kurla-vidyavihar': 3,
    'vidyavihar-ghatkopar': 3,
    'ghatkopar-vikhroli': 5,
    'vikhroli-kanjurmarg': 3,
    'kanjurmarg-bhandup': 3,
    'bhandup-mulund': 5,
    'mulund-thane': 5,              // Thane is ~54 min from CSMT
    'thane-kalwa': 4,
    'kalwa-mumbra': 5,
    'mumbra-diva': 7,
    'diva-kopar': 4,
    'kopar-dombivli': 4,
    'dombivli-thakurli': 4,
    'thakurli-kalyan': 5,           // Kalyan is ~88 min from CSMT

    // Kasara Branch
    'kalyan-shahad': 4,
    'shahad-ambivli': 3,
    'ambivli-titwala': 6,
    'titwala-khadavli': 4,
    'khadavli-vasind': 8,
    'vasind-asangaon': 5,
    'asangaon-atgaon': 5,
    'atgaon-thansit': 4,
    'thansit-khardi': 4,
    'khardi-umbermali': 4,
    'umbermali-kasara': 6,

    // Karjat Branch
    'dombivli-ulhasnagar': 4,
    'ulhasnagar-ambernath': 5,
    'ambernath-badlapur': 6,
    'badlapur-vangani': 6,
    'vangani-shelu': 5,
    'shelu-neral': 8,
    'neral-bhivpuri-road': 5,
    'bhivpuri-road-karjat': 8,

    // Western Line
    'churchgate-marine-lines': 2,
    'marine-lines-charni-road': 2,
    'charni-road-grant-road': 2,
    'grant-road-mumbai-central': 2,
    'mumbai-central-mahalaxmi': 2,
    'mahalaxmi-lower-parel': 3,
    'lower-parel-elphinstone-road': 2,
    'elphinstone-road-dadar-western': 3,
    'dadar-western-matunga-road': 2,
    'matunga-road-mahim': 2,
    'mahim-bandra': 3,
    'bandra-khar-road': 2,
    'khar-road-santacruz': 2,
    'santacruz-vile-parle': 3,
    'vile-parle-andheri': 3,
    'andheri-jogeshwari': 3,
    'jogeshwari-goregaon': 3,
    'goregaon-malad': 4,
    'malad-kandivali': 3,
    'kandivali-borivali': 4,
    'borivali-dahisar': 4,
    'dahisar-mira-road': 4,
    'mira-road-bhayandar': 3,
    'bhayandar-naigaon': 5,
    'naigaon-vasai-road': 3,
    'vasai-road-virar': 8,

    // Harbour Line
    'vadala-road-gtb-nagar': 3,
    'gtb-nagar-chunabhatti': 3,
    'chunabhatti-tilak-nagar': 2,
    'tilak-nagar-chembur': 2,
    'chembur-mankhurd': 4,
    'mankhurd-vashi': 8,
    'vashi-sanpada': 2,
    'sanpada-juinagar': 2,
    'juinagar-nerul': 3,
    'nerul-seawoods': 3,
    'seawoods-belapur': 2,
    'belapur-kharghar': 4,
    'kharghar-mansarovar': 3,
    'mansarovar-khandeshwar': 3,
    'khandeshwar-panvel': 4,

    // Trans Harbour Line
    'thane-airoli': 6,
    'airoli-rabale': 3,
    'rabale-ghansoli': 2,
    'ghansoli-kopar-khairane': 2,
    'kopar-khairane-turbhe': 4,
    'turbhe-vashi': 3,

    // Junction connections
    'dadar-western-dadar-central': 2,
    'dadar-central-dadar-western': 2,
    'dadar-central-vadala-road': 4,
};

// Key route travel times derived from timetable (for quick lookup)
export const routeTravelTimes = {
    // Central Line major routes
    'csmt-thane': 54,      // ~54-56 mins from timetable
    'csmt-kalyan': 88,     // ~88-90 mins from timetable
    'csmt-dadar': 18,      // ~18-20 mins
    'csmt-kurla': 28,      // ~28-30 mins
    'thane-kalyan': 34,    // ~34 mins

    // Harbour Line major routes
    'csmt-vashi': 49,      // ~49-50 mins
    'csmt-panvel': 88,     // ~88-90 mins
    'vashi-panvel': 39,    // ~39-40 mins

    // Trans Harbour
    'thane-vashi': 42,     // ~42 mins
    'thane-panvel': 52,    // ~52 mins
};

/**
 * Calculate travel time for a route
 * @param {Array} routePath - Array of station objects with 'id' property
 * @returns {number} - Estimated travel time in minutes
 */
export function calculateTravelTime(routePath) {
    if (!routePath || routePath.length < 2) return 0;

    let totalTime = 0;

    for (let i = 0; i < routePath.length - 1; i++) {
        const fromId = routePath[i].id;
        const toId = routePath[i + 1].id;

        // Try both directions for the key
        const key1 = `${fromId}-${toId}`;
        const key2 = `${toId}-${fromId}`;

        const time = travelTimes[key1] || travelTimes[key2] || 3; // Default 3 mins if not found
        totalTime += time;
    }

    return totalTime;
}

/**
 * Get formatted travel time string
 * @param {number} minutes - Travel time in minutes
 * @returns {string} - Formatted time string
 */
export function formatTravelTime(minutes) {
    if (minutes < 60) {
        return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}
