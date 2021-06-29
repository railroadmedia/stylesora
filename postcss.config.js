const cssnano = require("cssnano");

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('tailwind.config.js'),
        require('postcss-nested'),
        // process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
        // process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null,
    ]
}