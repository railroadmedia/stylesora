const plugin = require('tailwindcss/plugin');
const buttons = require('./_buttons');

module.exports = () => {
    return function({ theme, addComponents }) {
        addComponents(buttons(theme));
    }
}