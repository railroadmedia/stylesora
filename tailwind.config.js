const stylesoraTheme = require('./lib/theme');
const colors = require('tailwindcss/colors');

module.exports = {
    // mode: 'jit',
    prefix: 'tw-',
    important: true,
    purge: {
        enabled: false
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'visited'],
            textColor: ['visited', 'active'],
        }
    },
    theme: {
        extend: {
            fontFamily: stylesoraTheme.fontFamily,
            fontSize: stylesoraTheme.fontSize, 
            colors: {
                drumeo: stylesoraTheme.colors.drumeo,
                pianote: stylesoraTheme.colors.pianote,
                guitareo: stylesoraTheme.colors.guitareo,
                singeo: stylesoraTheme.colors.singeo,
                recordeo: stylesoraTheme.colors.recordeo,
                "true-gray": colors.trueGray
            },
            spacing: stylesoraTheme.spacing,
            zIndex: stylesoraTheme.zIndex,
            inset: stylesoraTheme.inset
        }
    },
    plugins: [
        require('./lib/base')(),
        require('./lib/utilities')(),
        require('./lib/components')(),
    ],
};

