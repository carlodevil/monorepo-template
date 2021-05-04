module.exports = {
    purge: {
        enabled: true,
        content: [
            './src/**/*.html',
            './src/**/*.vue',
            '../ui/**/*.vue',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};