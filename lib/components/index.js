const containers = require('./_containers');
const buttons = require('./_buttons');
const tooltips = require('./_tooltips');
const lists = require('./_lists');
const modals = require('./_modals');

module.exports = () => {
    return function({ theme, addComponents }) {
        const stylesoraComponents = [
            containers(theme),
            buttons(theme),
            tooltips(theme),
            lists(theme),
            modals(theme),
        ];

        addComponents(stylesoraComponents, ['responsive', 'hover', 'active']);
    }
}