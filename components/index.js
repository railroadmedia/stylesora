const plugin = require('tailwindcss/plugin');
const buttons = require('./_buttons');
const tooltips = require('./_tooltips');
const lists = require('./_lists');
const modals = require('./_modals');

module.exports = () => {
    return function({ theme, addComponents }) {
        addComponents([
            buttons(theme),
            tooltips(theme),
            lists(theme),
            modals(theme),
        ]);
    }
}