/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#1C1C1E', // Dark background from reference
                primary: '#FFFFFF',
                secondary: '#A1A1AA', // Gray/Zinc
                accent: '#3B82F6', // Blue accent
            }
        },
    },
    plugins: [],
}
