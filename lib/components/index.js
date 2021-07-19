const containers = require('./_containers');
const buttons = require('./_buttons');
const forms = require('./_forms');
const tooltips = require('./_tooltips');
const lists = require('./_lists');
const modals = require('./_modals');

module.exports = () => {
    return function({ theme, addComponents }) {
        const stylesoraComponents = [
            containers(theme),
            buttons(theme),
            forms(theme),
            tooltips(theme),
            lists(theme),
            modals(theme),
        ];

        addComponents(stylesoraComponents, ['responsive', 'hover', 'active']);
    }
}